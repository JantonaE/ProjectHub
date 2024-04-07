from typing import Optional
from pydantic import BaseModel
    
class Person(BaseModel):
    _id: str
    idPerson: str
    DNI: str
    name: str
    email: str
    pppo_internal: Optional[list[str]] = None # list of id of PPPOs in which he is internal manager
    pppo_external: Optional[list[str]] = None
    password: str
    company: str
    admin: float # 0 -> No es admin de la compañia, 1-> Si es admin
