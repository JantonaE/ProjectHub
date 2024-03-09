from typing import Optional
from pydantic import BaseModel
    

class Company(BaseModel):
    _id: str
    code: str
    NIF: str
    name: str
