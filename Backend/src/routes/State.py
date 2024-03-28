
from typing import Optional
from fastapi import APIRouter, Body, Path,Response

from ..config.db import conn
from ..schemas.StateSchema import StateEntity, StateEntityList
from ..models.State import State
from bson import ObjectId
from fastapi import Query

state = APIRouter()

@state.get("/States/", tags=["States"], response_model=list[State], description="Devuelve una lista de states")
async def find_all_states() -> list[State]:
    return StateEntityList(conn.ProjectHub.State.find())

@state.get("/States/{id}", tags=["States"], response_model=State, description="Devuelve el state con id pasado por parámetro")
async def find_one_state(id: str = Path(description="Id del state a buscar")) -> State:
    return StateEntity(conn.ProjectHub.State.find_one({"_id": ObjectId(id)}))

@state.post("/States/", tags=["States"], response_model=State, description="Crea un state y lo devuelve")
async def create_state(port: State) -> State:

    new_port = dict(port)
    id = conn.ProjectHub.State.insert_one(new_port).inserted_id

    return StateEntity(conn.ProjectHub.State.find_one({"_id": id}))
    
@state.delete("/States/{id}", tags=["States"], description="Elimina el state con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_state(id : str = Path(description="Id del state a eliminar")) -> Response:
    conn.ProjectHub.State.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@state.put("/States/{id}", tags=["States"], response_model=State, description="Actualiza el state con id pasado por parámetro y lo devuelve")
async def update_state(id: str = Path(description="Id del state a actualizar"), 
                         state: State = Body(description="Datos del state a actualizar")) -> State:
    
    
    conn.ProjectHub.State.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(state)})

    return StateEntity(conn.ProjectHub.State.find_one({"_id": ObjectId(id)}))




@state.get("/StatesType/{state_type}", tags=["States"], response_model=list[State], description="Devuelve una lista de states filtrados")
async def find_all_states_of_type(
    # Como parámetros de la función van los filtros
    state_type: str = Path(description="Id del state a actualizar")
) -> list[State]:
    
    resList = []
    for state in StateEntityList(conn.ProjectHub.State.find()):
        print(state["type"])
        if state["type"] == float(state_type):
            resList.append(StateEntity(conn.ProjectHub.State.find_one({"_id": ObjectId(state["id"])})))

    return resList

@state.get("/States/DeletedByType/{state_type}", tags=["States"], response_model=State, description="Devuelve el estado con el type pasado por parámetro y estado 'Deleted'")
async def find_deleted_state_by_type(
    state_type: float = Path(description="Id del state a actualizar")
) -> State:
    return StateEntity(conn.ProjectHub.State.find_one({"type": state_type, "state": "Deleted"}))


