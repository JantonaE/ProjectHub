
def PersonEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "DNI": str(item["DNI"]),
        "name": str(item["name"]),
        "email": str(item["email"])
    }

def PersonEntityList(entity) -> list:
    return [PersonEntity(item) for item in entity]
