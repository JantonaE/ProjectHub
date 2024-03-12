from typing import Optional
from pydantic import BaseModel
    
class Person(BaseModel):
    _id: str
    idPerson: str
    DNI: str
    name: str
    email: str
