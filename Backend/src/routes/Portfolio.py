
from typing import Optional, Union
from fastapi import APIRouter, Body, Path,Response

from ..models.Program import Program
from ..models.Project import Project
from ..schemas.ProgramSchema import ProgramEntity, ProgramEntityList
from ..schemas.ProjectSchema import ProjectEntity, ProjectEntityList

from ..config.db import conn
from ..schemas.PortfolioSchema import PortfolioEntity, PortfolioEntityList
from ..models.Portfolio import Portfolio
from bson import ObjectId
from fastapi import Query

portfolio = APIRouter()

@portfolio.get("/Portfolios/", tags=["Portfolios"], response_model=list[Portfolio], description="Devuelve una lista de portfolios")
async def find_all_portfolios() -> list[Portfolio]:
    return PortfolioEntityList(conn.ProjectHub.Portfolio.find())

@portfolio.get("/Portfolios/{id}", tags=["Portfolios"], response_model=Portfolio, description="Devuelve el portfolio con id pasado por parámetro")
async def find_one_portfolio(id: str = Path(description="Id del portfolio a buscar")) -> Portfolio:
    return PortfolioEntity(conn.ProjectHub.Portfolio.find_one({"_id": ObjectId(id)}))

# Get all the PPP of a parent

@portfolio.get("/Portfolios/PortfolioSons/{id}", tags=["Portfolios"], response_model=list[Portfolio], description="Devuelve los portfolios con parent_id con id pasado por parámetro")
async def find_portfolio_sons(id: str = Path(description="Id del portfolio a buscar sus hijos")) -> list[Portfolio]:
    resList = []
    for port in PortfolioEntityList(conn.ProjectHub.Portfolio.find()):
        if port["parent_id"] == id:
            resList.append(PortfolioEntity(conn.ProjectHub.Portfolio.find_one({"_id": ObjectId(port["id"])})))

    return resList

@portfolio.get("/Portfolios/ProgramSons/{id}", tags=["Portfolios"], response_model=list[Program], description="Devuelve los programas con parent_id con id pasado por parámetro")
async def find_program_sons(id: str = Path(description="Id del portfolio a buscar sus hijos")) -> list[Program]:
    resList = []
    for proj in ProjectEntityList(conn.ProjectHub.Project.find()):
        if proj["parent_id"] == id:
            resList.append(ProjectEntity(conn.ProjectHub.Program.find_one({"_id": ObjectId(proj["id"])})))

    return resList

@portfolio.get("/Portfolios/ProjectSons/{id}", tags=["Portfolios"], response_model=list[Project], description="Devuelve los proyectos con parent_id con id pasado por parámetro")
async def find_project_sons(id: str = Path(description="Id del portfolio a buscar sus hijos")) -> list[Project]:
    resList = []
    for proj in ProjectEntityList(conn.ProjectHub.Project.find()):
        if proj["parent_id"] == id:
            resList.append(ProjectEntity(conn.ProjectHub.Project.find_one({"_id": ObjectId(proj["id"])})))

    return resList
# ---

@portfolio.post("/Portfolios/", tags=["Portfolios"], response_model=Portfolio, description="Crea un portfolio y lo devuelve")
async def create_portfolio(port: Portfolio) -> Portfolio:

    new_port = dict(port)
    id = conn.ProjectHub.Portfolio.insert_one(new_port).inserted_id

    return PortfolioEntity(conn.ProjectHub.Portfolio.find_one({"_id": id}))
    
@portfolio.delete("/Portfolios/{id}", tags=["Portfolios"], description="Elimina el portfolio con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_portfolio(id : str = Path(description="Id del portfolio a eliminar")) -> Response:
    conn.ProjectHub.Portfolio.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@portfolio.put("/Portfolios/{id}", tags=["Portfolios"], response_model=Portfolio, description="Actualiza el portfolio con id pasado por parámetro y lo devuelve")
async def update_portfolio(id: str = Path(description="Id del portfolio a actualizar"), 
                         portfolio: Portfolio = Body(description="Datos del portfolio a actualizar")) -> Portfolio:
    
    
    conn.ProjectHub.Portfolio.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(portfolio)})

    return PortfolioEntity(conn.ProjectHub.Portfolio.find_one({"_id": ObjectId(id)}))
