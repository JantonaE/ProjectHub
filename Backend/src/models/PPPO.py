from typing import Optional
from pydantic import BaseModel
    

class PPPO(BaseModel):
    _id: str
    idPPPO: str
    code: str
    company: str
    parent_id: Optional[str] = None
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
    ROI: float
    cost_benefit: float
    PPPO: float # 0->Portfolio 1->Program 2->Project 3->Operation
