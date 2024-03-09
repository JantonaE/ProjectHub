from typing import Optional
from fastapi import APIRouter, Body, Path,Response


from ..config.db import conn
from ..schemas.ProjectSchema import ProjectEntity, ProjectEntityList
from ..models.Project import Project
from bson import ObjectId
from fastapi import Query

project = APIRouter()

@project.get("/Projects/", tags=["Projects"], response_model=list[Project], description="Devuelve una lista de proyectos")
async def find_all_projects() -> list[Project]:
    return ProjectEntityList(conn.ProjectHub.Project.find())


@project.get("/Projects/{id}", tags=["Projects"], response_model=Project, description="Devuelve el project con id pasado por parámetro")
async def find_one_project(id: str = Path(description="Id del project a buscar")) -> Project:
    return ProjectEntity(conn.ProjectHub.Project.find_one({"_id": ObjectId(id)}))

@project.post("/Projects/", tags=["Projects"], response_model=Project, description="Crea un project y lo devuelve")
async def create_project(port: Project) -> Project:

    new_port = dict(port)
    id = conn.ProjectHub.Project.insert_one(new_port).inserted_id

    return ProjectEntity(conn.ProjectHub.Project.find_one({"_id": id}))
    
@project.delete("/Projects/{id}", tags=["Projects"], description="Elimina el project con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_project(id : str = Path(description="Id del project a eliminar")) -> Response:
    conn.ProjectHub.Project.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@project.put("/Projects/{id}", tags=["Projects"], response_model=Project, description="Actualiza el project con id pasado por parámetro y lo devuelve")
async def update_project(id: str = Path(description="Id del project a actualizar"), 
                         project: Project = Body(description="Datos del project a actualizar")) -> Project:
    
    
    conn.ProjectHub.Project.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(project)})

    return ProjectEntity(conn.ProjectHub.Project.find_one({"_id": ObjectId(id)}))
