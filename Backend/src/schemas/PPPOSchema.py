from datetime import datetime

date_format = '%d/%m/%Y'

def PPPOEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idPPPO": str(item["_id"]),
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
        "priority": item["priority"],
        "strategic_goal": str(item["strategic_goal"]),
        "earned_value": item["earned_value"],
        "ROI": item["ROI"],
        "cost_benefit": item["cost_benefit"],
        "PPPO": item["PPPO"],
        "state": str(item["state"]),
        "internal_manager": str(item["internal_manager"]),
        "external_manager": str(item["external_manager"])
    }

def PPPOEntityList(entity) -> list:
    return [PPPOEntity(item) for item in entity]
