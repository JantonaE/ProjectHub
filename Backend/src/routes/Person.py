
from typing import Optional
from fastapi import APIRouter, Body, Path,Response

from ..config.db import conn
from ..schemas.PersonSchema import PersonEntity, PersonEntityList
from ..models.Person import Person
from bson import ObjectId
from fastapi import Query

person = APIRouter()

@person.get("/Persons/", tags=["Persons"], response_model=list[Person], description="Devuelve una lista de persons")
async def find_all_persons() -> list[Person]:
    return PersonEntityList(conn.ProjectHub.Person.find())

@person.get("/Persons/{id}", tags=["Persons"], response_model=Person, description="Devuelve el person con id pasado por parámetro")
async def find_one_person(id: str = Path(description="Id del person a buscar")) -> Person:
    return PersonEntity(conn.ProjectHub.Person.find_one({"_id": ObjectId(id)}))

@person.post("/Persons/", tags=["Persons"], response_model=Person, description="Crea un person y lo devuelve")
async def create_person(port: Person) -> Person:

    new_port = dict(port)
    id = conn.ProjectHub.Person.insert_one(new_port).inserted_id

    return PersonEntity(conn.ProjectHub.Person.find_one({"_id": id}))
    
@person.delete("/Persons/{id}", tags=["Persons"], description="Elimina el person con id pasado por parámetro", status_code=200, response_class=Response)
async def delete_person(id : str = Path(description="Id del person a eliminar")) -> Response:
    conn.ProjectHub.Person.find_one_and_delete({"_id": ObjectId(id)})

    return Response(status_code=200)

@person.put("/Persons/{id}", tags=["Persons"], response_model=Person, description="Actualiza el person con id pasado por parámetro y lo devuelve")
async def update_person(id: str = Path(description="Id del person a actualizar"), 
                         person: Person = Body(description="Datos del person a actualizar")) -> Person:
    
    
    conn.ProjectHub.Person.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(person)})

    return PersonEntity(conn.ProjectHub.Person.find_one({"_id": ObjectId(id)}))
