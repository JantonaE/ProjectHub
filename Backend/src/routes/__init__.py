from fastapi import APIRouter

from .Company import company
from .Person import person
from .PPPO import pppo

BaseRouter = APIRouter()

BaseRouter.include_router(person)
BaseRouter.include_router(company)
BaseRouter.include_router(pppo)