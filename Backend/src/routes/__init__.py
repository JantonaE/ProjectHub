from fastapi import APIRouter

from .Project import project
from .Portfolio import portfolio
from .Program import program
from .Company import company
from .Person import person

BaseRouter = APIRouter()
BaseRouter.include_router(project)
BaseRouter.include_router(portfolio)
BaseRouter.include_router(program)
BaseRouter.include_router(person)
BaseRouter.include_router(company)