
from typing import Optional, Union
from fastapi import APIRouter, Body, Path,Response


from ..config.db import conn
from ..schemas.PPPOSchema import PPPOEntity, PPPOEntityList
from ..models.PPPO import PPPO
from bson import ObjectId
from fastapi import Query

pppo = APIRouter()

#@pppo.get("/PPPOs/", tags=["PPPOs"], response_model=list[PPPO], description="Devuelve una lista de pppos")
#async def find_all_pppos() -> list[PPPO]:
#    return PPPOEntityList(conn.ProjectHub.PPPO.find())

@pppo.get("/PPPOs/{id}", tags=["PPPOs"], response_model=PPPO, description="Devuelve el pppo con id pasado por parámetro")
async def find_one_pppo(id: str = Path(description="Id del pppo a buscar")) -> PPPO:
    return PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(id)}))

# Get all the PPP of a parent

@pppo.get("/PPPOs/Sons/{id}", tags=["PPPOs"], response_model=list[PPPO], description="Devuelve los pppos con parent_id con id pasado por parámetro")
async def find_pppo_sons(id: str = Path(description="Id del pppo a buscar sus hijos")) -> list[PPPO]:
    resList = []
    for port in PPPOEntityList(conn.ProjectHub.PPPO.find()):
        if port["parent_id"] == id:
            resList.append(PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(port["id"])})))

    return resList
# ---

# Get all the Ancestors of a PPPO

@pppo.get("/PPPOs/Ancestors/{id}", tags=["PPPOs"], response_model=list[PPPO], description="Devuelve los ancestros del id pasado por parámetro")
async def find_pppo_ancestors(id: str = Path(description="Id del pppo a buscar sus padres")) -> list[PPPO]:
    resList = []
    act = PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(id)}))
    resList.append(act)
    parent = act["parent_id"]
    while (parent != ""):
        act = PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(parent)}))
        resList.append(PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(act["id"])})))
        parent = act["parent_id"]
   
    return resList
# ---

# See if there is an existing "brother" with same code

@pppo.get("/PPPOs/Brother/", tags=["PPPOs"], response_model=bool, description="Verifica si hay algún hermano con el mismo código del padre")
async def find_pppo_brothers_with_code(id: str = Query(None, description="Id del PPPO padre"),
                                       code: str = Query(None, description="Código del PPPO")) -> bool:
    parent_id = ObjectId(id)
    count = conn.ProjectHub.PPPO.count_documents({"parent_id": id, "code": code})
    return count >= 1

# ----

# See if there is an existing "brother" with same code in the company

@pppo.get("/PPPOs/BrotherAncestor/", tags=["PPPOs"], response_model=bool, description="Verifica si hay algún hermano con el mismo código del padre")
async def find_pppo_ancestor_with_code(id: str = Query(None, description="Id de la compañia"),
                                       code: str = Query(None, description="Código del PPPO")) -> bool:
    
    count = conn.ProjectHub.PPPO.count_documents({"parent_id": "", "code": code,"company":id})
    return count >= 1


# ---



# ---
@pppo.post("/PPPOs/", tags=["PPPOs"], response_model=PPPO, description="Crea un pppo y lo devuelve")
async def create_pppo(port: PPPO) -> PPPO:
    new_port = dict(port)
    id = conn.ProjectHub.PPPO.insert_one(new_port).inserted_id
    new_port["idPPPO"] = str(id)
    print(PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": id})))
    return PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": id}))
    
@pppo.delete("/PPPOs/{id}", tags=["PPPOs"], description="Elimina el pppo con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_pppo(id : str = Path(description="Id del pppo a eliminar")) -> Response:
    conn.ProjectHub.PPPO.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@pppo.put("/PPPOs/{id}", tags=["PPPOs"], response_model=PPPO, description="Actualiza el pppo con id pasado por parámetro y lo devuelve")
async def update_pppo(id: str = Path(description="Id del pppo a actualizar"), 
                         pppo: PPPO = Body(description="Datos del pppo a actualizar")) -> PPPO:
    
    
    conn.ProjectHub.PPPO.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(pppo)})

    return PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(id)}))


# ----
# Companies 
# Get all the highest level portfolios of a Company
@pppo.get("/Companies/Portfolios/{id}", tags=["Companies"], response_model=list[PPPO], description="Devuelve los portfolios sin parent_id de company con id pasado por parámetro")
async def find_high_portfolios(id: str = Path(description="Id del company a buscar")) -> list[PPPO]:
    resList = []
    for port in PPPOEntityList(conn.ProjectHub.PPPO.find()):
        if port["company"] == id:
            if port["parent_id"] == "":
                resList.append(PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(port["id"])})))

    return resList


# -----
#Filtros
from ..utils.utils import compare_dates
@pppo.get("/PPPOs/", tags=["PPPOs"], response_model=list[PPPO], description="Devuelve una lista de PPPO filtrados")
async def find_all_pppos_filter(
    parent_id: str = Query(None, description="Id del padre"), 
    company: str = Query(None, description="Compañia"), 
    search: str = Query(None, description="Búsqueda en Título o Código"),  # Para la barra de búsqueda
    planned_valueMin: float = Query(None, description="P.V (mínimo)"),
    planned_valueMax: float = Query(None, description="P.V (máximo)"),
    actual_costMin: float = Query(None, description="A.C (mínimo)"),
    actual_costMax: float = Query(None, description="A.C (máximo)"),
    earned_valueMin: float = Query(None, description="Earned Value (mínimo)"),
    earned_valueMax: float = Query(None, description="Earned Value (máximo)"),
    risk: float = Query(None, description="Riesgo del PPPO"),
    priority: float = Query(None, description="Prioridad del PPPO"),
    start_dateMin: str = Query(None, description="Fecha de inicio planeada (mínima) - El formato debe ser 'dd/mm/yyyy'"),
    start_dateMax: str = Query(None, description="Fecha de inicio planeada (máxima) - El formato debe ser 'dd/mm/yyyy'"),
    start_real_dateMin: str = Query(None, description="Fecha de inicio real (mínima) - El formato debe ser 'dd/mm/yyyy'"),
    start_real_dateMax: str = Query(None, description="Fecha de inicio real (máxima) - El formato debe ser 'dd/mm/yyyy'"),
    finish_dateMin: str = Query(None, description="Fecha de fin planeada (mínima) - El formato debe ser 'dd/mm/yyyy'"),
    finish_dateMax: str = Query(None, description="Fecha de fin planeada (máxima) - El formato debe ser 'dd/mm/yyyy'"),
    finish_real_dateMin: str = Query(None, description="Fecha de fin real (mínima) - El formato debe ser 'dd/mm/yyyy'"),
    finish_real_dateMax: str = Query(None, description="Fecha de fin real (máxima) - El formato debe ser 'dd/mm/yyyy'"),
    state: str = Query(None, description="Estado del PPPO"),
    sortedBy: str = Query(None, description="Campo por el que se ordena la lista"),
    desc: bool = Query(False, description="Ordenar por orden descendente")
) -> list[PPPO]:
    
    resList = []
    print("Inicia")
    if search is None and planned_valueMin is None and planned_valueMax is None and actual_costMin is None and actual_costMax is None and earned_valueMin is None and earned_valueMax is None and risk is None and priority is None and start_dateMin is None and start_dateMax is None and start_real_dateMin is None and start_real_dateMax is None and finish_dateMin is None and finish_dateMax is None and finish_real_dateMin is None and finish_real_dateMax is None and state is None:
        print("Entra al vacio")
        print(parent_id)
        print(company)
        if(parent_id is None or parent_id == ""):
            print("No es padre")
            resList = await find_high_portfolios(company)
            
            print(resList)
        else:
            print("Es padre")
            resList = await find_pppo_sons(parent_id)
            print(resList)

        
        
    else:
        print("Entra al No vacio")
        if(parent_id is None or parent_id == ""):
            lista = await find_high_portfolios(company)
            
        else:
            lista = await find_pppo_sons(parent_id)

        for item in lista:
            ok = True

            if search is not None:
                if not (search.upper() in item["title"].upper() or search.upper() in item["code"].upper()):      
                    ok = False

            if planned_valueMin is not None:
                if not (item["planned_value"] >= planned_valueMin):
                    ok = False
            
            if planned_valueMax is not None:
                if not (item["planned_value"] <= planned_valueMax):
                    ok = False

            if actual_costMin is not None:
                if not (item["actual_cost"] >= actual_costMin):
                    ok = False
            
            if actual_costMax is not None:
                if not (item["actual_cost"] <= actual_costMax):
                    ok = False

            if earned_valueMin is not None:
                if not (item["earned_value"] >= earned_valueMin):
                    ok = False
            
            if earned_valueMax is not None:
                if not (item["earned_value"] <= earned_valueMax):
                    ok = False

            if risk is not None:
                if not (item["risk"] == risk):
                    ok = False

            if priority is not None:
                if not (item["priority"] == priority):
                    ok = False

            if start_dateMin is not None:
                if not (compare_dates(item["start_date"], start_dateMin) >= 0):
                    ok = False
            
            if start_dateMax is not None:
                if not (compare_dates(item["start_date"], start_dateMax) <= 0):
                    ok = False

            if start_real_dateMin is not None:
                if not (compare_dates(item["start_real_date"], start_real_dateMin) >= 0):
                    ok = False
            
            if start_real_dateMax is not None:
                if not (compare_dates(item["start_real_date"], start_real_dateMax) <= 0):
                    ok = False

            if finish_dateMin is not None:
                if not (compare_dates(item["finish_date"], finish_dateMin) >= 0):
                    ok = False
            
            if finish_dateMax is not None:
                if not (compare_dates(item["finish_date"], finish_dateMax) <= 0):
                    ok = False

            if finish_real_dateMin is not None:
                if not (compare_dates(item["finish_real_date"], finish_real_dateMin) >= 0):
                    ok = False
            
            if finish_real_dateMax is not None:
                if not (compare_dates(item["finish_real_date"], finish_real_dateMax) <= 0):
                    ok = False

            if state is not None:
                if not (item["state"] == state):
                    ok = False


            if ok:
                resList.append(item)

    if sortedBy is not None:
            resList.sort(key=lambda x: x[sortedBy], reverse=desc)
    
    # DEBUG - print(resList)
    return resList

# ----