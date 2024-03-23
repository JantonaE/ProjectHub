
def PersonEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idPerson": str(item["idPerson"]),
        "DNI": str(item["DNI"]),
        "name": str(item["name"]),
        "email": str(item["email"]),
        "pppo_internal": item["pppo_internal"],
        "pppo_external": item["pppo_external"],
        "password": str(item["password"])
    }

def PersonEntityList(entity) -> list:
    return [PersonEntity(item) for item in entity]
