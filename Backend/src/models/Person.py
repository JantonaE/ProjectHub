from typing import Optional
from pydantic import BaseModel
    
class Person(BaseModel):
    _id: str
    DNI: str
    name: str
    email: str
