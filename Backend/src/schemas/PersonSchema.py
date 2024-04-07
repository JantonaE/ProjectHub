
def PersonEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idPerson": str(item["_id"]),
        "DNI": str(item["DNI"]),
        "name": str(item["name"]),
        "email": str(item["email"]),
        "pppo_internal": item["pppo_internal"],
        "pppo_external": item["pppo_external"],
        "password": str(item["password"]),
        "company": str(item["company"]),
        "admin": item["admin"]
    }

def PersonEntityList(entity) -> list:
    return [PersonEntity(item) for item in entity]
