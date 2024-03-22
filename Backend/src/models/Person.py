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
