from fastapi import APIRouter

from .Company import company
from .Person import person
from .PPPO import pppo
from .State import state
from .Milestone import milestone

BaseRouter = APIRouter()

BaseRouter.include_router(person)
BaseRouter.include_router(company)
BaseRouter.include_router(pppo)
BaseRouter.include_router(state)
BaseRouter.include_router(milestone)