from typing import Optional
from pydantic import BaseModel
    

class Milestone(BaseModel):
    _id: str
    idMilestone: str
    code: str
    company: str
    parent_id: str
    title: str
    description: str
    planned_value: float
    actual_cost: float
    planned_date: str # FORMATO: string de la forma "dd/mm/yyyy"
    real_date: Optional[str] = None # FORMATO: string de la forma "dd/mm/yyyy"
    risk: float
    priority: float
    strategic_goal: str
    earned_value: float
    ROI: float
    cost_benefit: float
    state: str # id del state
    internal_manager: str # id of the person managing
    external_manager: Optional[str]
