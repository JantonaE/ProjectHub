from typing import Optional
from pydantic import BaseModel
    

class Company(BaseModel):
    _id: str
    idCompany: str
    code: str
    NIF: str
    name: str
    admin: str 
