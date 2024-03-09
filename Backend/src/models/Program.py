from typing import Optional
from pydantic import BaseModel
    

class Program(BaseModel):
    _id: str
    code: str
    company: str
    parent_id: str
    title: str
    description: str
    planned_value: float
    actual_cost: float
    start_date: str # FORMATO: string de la forma "dd/mm/yyyy"
    finish_date: str
    start_real_date: str # FORMATO: string de la forma "dd/mm/yyyy"
    finish_real_date: str
    risk: float
    priority: str
    strategic_goal: str
    earned_value: float
