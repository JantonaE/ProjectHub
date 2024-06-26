
def CompanyEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idCompany": str(item["_id"]),
        "code": str(item["code"]),
        "NIF": str(item["NIF"]),
        "name": str(item["name"]),
        "admin": str(item["admin"])
    }

def CompanyEntityList(entity) -> list:
    return [CompanyEntity(item) for item in entity]
