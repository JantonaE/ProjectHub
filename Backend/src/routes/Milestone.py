
from typing import Optional, Union
from fastapi import APIRouter, Body, Path,Response


from ..config.db import conn
from ..schemas.MilestoneSchema import MilestoneEntity, MilestoneEntityList
from ..models.Milestone import Milestone
from bson import ObjectId
from fastapi import Query

milestone = APIRouter()

@milestone.get("/Milestones/{id}", tags=["Milestones"], response_model=Milestone, description="Devuelve el milestone con id pasado por parámetro")
async def find_one_milestone(id: str = Path(description="Id del milestone a buscar")) -> Milestone:
    return MilestoneEntity(conn.ProjectHub.Milestone.find_one({"_id": ObjectId(id)}))


# ---
@milestone.post("/Milestones/", tags=["Milestones"], response_model=Milestone, description="Crea un milestone y lo devuelve")
async def create_milestone(port: Milestone) -> Milestone:
    new_port = dict(port)
    id = conn.ProjectHub.Milestone.insert_one(new_port).inserted_id
    new_port["idMilestone"] = str(id)
    print(MilestoneEntity(conn.ProjectHub.Milestone.find_one({"_id": id})))
    return MilestoneEntity(conn.ProjectHub.Milestone.find_one({"_id": id}))
    
@milestone.delete("/Milestones/{id}", tags=["Milestones"], description="Elimina el milestone con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_milestone(id : str = Path(description="Id del milestone a eliminar")) -> Response:
    conn.ProjectHub.Milestone.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@milestone.put("/Milestones/{id}", tags=["Milestones"], response_model=Milestone, description="Actualiza el milestone con id pasado por parámetro y lo devuelve")
async def update_milestone(id: str = Path(description="Id del milestone a actualizar"), 
                         milestone: Milestone = Body(description="Datos del milestone a actualizar")) -> Milestone:
    
    
    conn.ProjectHub.Milestone.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(milestone)})

    return MilestoneEntity(conn.ProjectHub.Milestone.find_one({"_id": ObjectId(id)}))


# Get all the PPP of a parent

@milestone.get("/Milestones/Sons/{id}", tags=["Milestones"], response_model=list[Milestone], description="Devuelve los milestones con parent_id con id pasado por parámetro")
async def find_milestone_sons(id: str = Path(description="Id del milestone a buscar sus hijos")) -> list[Milestone]:
    resList = []
    for port in MilestoneEntityList(conn.ProjectHub.Milestone.find()):
        if port["parent_id"] == id:
            resList.append(MilestoneEntity(conn.ProjectHub.Milestone.find_one({"_id": ObjectId(port["id"])})))

    return resList
# ---