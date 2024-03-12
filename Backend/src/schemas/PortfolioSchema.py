from datetime import datetime

date_format = '%d/%m/%Y'

def PortfolioEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idPortfolio": str(item["idPortfolio"]),
        "code": str(item["code"]),
        "company": str(item["company"]),
        "parent_id": str(item["parent_id"]),
        "title": str(item["title"]),
        "description": str(item["description"]),
        "planned_value": item["planned_value"],
        "actual_cost": item["actual_cost"],
        "start_date": datetime.strptime(item["start_date"], date_format).strftime(date_format),
        "finish_date": datetime.strptime(item["finish_date"], date_format).strftime(date_format),
        "start_real_date": datetime.strptime(item["start_real_date"], date_format).strftime(date_format),
        "finish_real_date": datetime.strptime(item["finish_real_date"], date_format).strftime(date_format),
        "risk": item["risk"],
        "priority": str(item["priority"]),
        "strategic_goal": str(item["strategic_goal"]),
        "earned_value": item["earned_value"],
        "ROI": item["ROI"],
        "cost_benefit": item["cost_benefit"]
    }

def PortfolioEntityList(entity) -> list:
    return [PortfolioEntity(item) for item in entity]
