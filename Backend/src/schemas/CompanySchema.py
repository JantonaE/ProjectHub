
def CompanyEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "idCompany": str(item["idCompany"]),
        "code": str(item["code"]),
        "NIF": str(item["NIF"]),
        "name": str(item["name"])
    }

def CompanyEntityList(entity) -> list:
    return [CompanyEntity(item) for item in entity]
