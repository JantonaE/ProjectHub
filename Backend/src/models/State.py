from pydantic import BaseModel
    
class State(BaseModel):
    _id: str
    idState: str
    state: str
    type: float # 0->Portfolio 1->Program 2->Project 3->Operation

