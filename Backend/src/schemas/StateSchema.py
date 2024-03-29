
def StateEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idState": str(item["_id"]),
        "state": str(item["state"]),
        "type": item["type"]
    }

def StateEntityList(entity) -> list:
    return [StateEntity(item) for item in entity]
