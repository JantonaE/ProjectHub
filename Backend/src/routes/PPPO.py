
from typing import Optional, Union
from fastapi import APIRouter, Body, Path,Response


from ..config.db import conn
from ..schemas.PPPOSchema import PPPOEntity, PPPOEntityList
from ..models.PPPO import PPPO
from bson import ObjectId
from fastapi import Query

pppo = APIRouter()

@pppo.get("/PPPOs/", tags=["PPPOs"], response_model=list[PPPO], description="Devuelve una lista de pppos")
async def find_all_pppos() -> list[PPPO]:
    return PPPOEntityList(conn.ProjectHub.PPPO.find())

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

@pppo.post("/PPPOs/", tags=["PPPOs"], response_model=PPPO, description="Crea un pppo y lo devuelve")
async def create_pppo(port: PPPO) -> PPPO:

    new_port = dict(port)
    id = conn.ProjectHub.PPPO.insert_one(new_port).inserted_id

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
