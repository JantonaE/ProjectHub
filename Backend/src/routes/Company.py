
from typing import Optional
from fastapi import APIRouter, Body, Path,Response


from ..models.PPPO import PPPO

from ..schemas.PPPOSchema import PPPOEntity, PPPOEntityList

from ..config.db import conn
from ..schemas.CompanySchema import CompanyEntity, CompanyEntityList
from ..models.Company import Company
from bson import ObjectId
from fastapi import Query

company = APIRouter()

@company.get("/Companies/", tags=["Companies"], response_model=list[Company], description="Devuelve una lista de companies")
async def find_all_companies() -> list[Company]:
    return CompanyEntityList(conn.ProjectHub.Company.find())

@company.get("/Companies/{id}", tags=["Companies"], response_model=Company, description="Devuelve el company con id pasado por parámetro")
async def find_one_company(id: str = Path(description="Id del company a buscar")) -> Company:
    return CompanyEntity(conn.ProjectHub.Company.find_one({"_id": ObjectId(id)}))


# Get all the highest level portfolios of a Company
@company.get("/Companies/Portfolios/{id}", tags=["Companies"], response_model=list[PPPO], description="Devuelve los portfolios sin parent_id de company con id pasado por parámetro")
async def find_high_portfolios(id: str = Path(description="Id del company a buscar")) -> list[PPPO]:
    resList = []
    for port in PPPOEntityList(conn.ProjectHub.PPPO.find()):
        if port["company"] == id:
            if port["parent_id"] == "":
                resList.append(PPPOEntity(conn.ProjectHub.PPPO.find_one({"_id": ObjectId(port["id"])})))

    return resList


@company.post("/Companies/", tags=["Companies"], response_model=Company, description="Crea un company y lo devuelve")
async def create_company(port: Company) -> Company:

    new_port = dict(port)
    id = conn.ProjectHub.Company.insert_one(new_port).inserted_id

    return CompanyEntity(conn.ProjectHub.Company.find_one({"_id": id}))
    
@company.delete("/Companies/{id}", tags=["Companies"], description="Elimina el company con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_company(id : str = Path(description="Id del company a eliminar")) -> Response:
    conn.ProjectHub.Company.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@company.put("/Companies/{id}", tags=["Companies"], response_model=Company, description="Actualiza el company con id pasado por parámetro y lo devuelve")
async def update_company(id: str = Path(description="Id del company a actualizar"), 
                         company: Company = Body(description="Datos del company a actualizar")) -> Company:
    
    
    conn.ProjectHub.Company.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(company)})

    return CompanyEntity(conn.ProjectHub.Company.find_one({"_id": ObjectId(id)}))
