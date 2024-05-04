from datetime import datetime

date_format = '%d/%m/%Y'

def MilestoneEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idMilestone": str(item["_id"]),
        "code": str(item["code"]),
        "company": str(item["company"]),
        "parent_id": str(item["parent_id"]),
        "title": str(item["title"]),
        "description": str(item["description"]),
        "planned_value": item["planned_value"],
        "actual_cost": item["actual_cost"],
        "planned_date": datetime.strptime(item["planned_date"], date_format).strftime(date_format),
        "real_date": datetime.strptime(item["real_date"], date_format).strftime(date_format),
        "risk": item["risk"],
        "priority": item["priority"],
        "strategic_goal": str(item["strategic_goal"]),
        "earned_value": item["earned_value"],
        "ROI": item["ROI"],
        "cost_benefit": item["cost_benefit"],
        "state": str(item["state"]),
        "internal_manager": str(item["internal_manager"]),
        "external_manager": str(item["external_manager"])
    }

def MilestoneEntityList(entity) -> list:
    return [MilestoneEntity(item) for item in entity]
