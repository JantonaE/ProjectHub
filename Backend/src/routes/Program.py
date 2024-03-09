
from typing import Optional
from fastapi import APIRouter, Body, Path,Response

from ..config.db import conn
from ..schemas.ProgramSchema import ProgramEntity, ProgramEntityList
from ..models.Program import Program
from bson import ObjectId
from fastapi import Query

program = APIRouter()

@program.get("/Programs/", tags=["Programs"], response_model=list[Program], description="Devuelve una lista de programas")
async def find_all_programs() -> list[Program]:
    return ProgramEntityList(conn.ProjectHub.Portfolio.find())


@program.get("/Programs/{id}", tags=["Programs"], response_model=Program, description="Devuelve el program con id pasado por parámetro")
async def find_one_program(id: str = Path(description="Id del program a buscar")) -> Program:
    return ProgramEntity(conn.ProjectHub.Program.find_one({"_id": ObjectId(id)}))

@program.post("/Programs/", tags=["Programs"], response_model=Program, description="Crea un program y lo devuelve")
async def create_program(port: Program) -> Program:

    new_port = dict(port)
    id = conn.ProjectHub.Program.insert_one(new_port).inserted_id

    return ProgramEntity(conn.ProjectHub.Program.find_one({"_id": id}))
    
@program.delete("/Programs/{id}", tags=["Programs"], description="Elimina el program con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_program(id : str = Path(description="Id del program a eliminar")) -> Response:
    conn.ProjectHub.Program.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@program.put("/Programs/{id}", tags=["Programs"], response_model=Program, description="Actualiza el program con id pasado por parámetro y lo devuelve")
async def update_program(id: str = Path(description="Id del program a actualizar"), 
                         program: Program = Body(description="Datos del program a actualizar")) -> Program:
    
    
    conn.ProjectHub.Program.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(program)})

    return ProgramEntity(conn.ProjectHub.Program.find_one({"_id": ObjectId(id)}))
