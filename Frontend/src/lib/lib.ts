import PPPO from "../api/models/PPPOInput"
import State from "../api/models/State"
//import Company from "../api/models/Company"
import type { Person } from "../api/models/Person";
import type { Company } from "../api/models/Company";

export async function createPPPO(
    radioButton: Number,
    title: string,
    description: string,
    code: string,
    strategic_goal: string,
    planned_value: Number,
    actual_cost: Number | null,
    start_date: string,
    finish_date: string | null,
    start_real_date: string | null,
    finish_real_date: string | null,
    risk: number,
    priority: number,
    internal_manager: string,
    external_manager: string,
    company: string,
    parent_id: string,
    state: string
) :PPPO {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/`;
    console.log("Cost: ");
    console.log(actual_cost);
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idPPPO: "",
                code: code,
                company: company,
                parent_id: parent_id,
                title: title,
                description: description,
                planned_value: planned_value,     
                actual_cost: actual_cost,  
                start_date: start_date,    
                finish_date: finish_date,  
                start_real_date: start_real_date,  
                finish_real_date: finish_real_date,
                risk: risk,
                priority: priority,
                strategic_goal: strategic_goal,
                earned_value: 0,
                ROI: 0,
                cost_benefit: 0,            
                PPPO: radioButton,
                state: state,
                internal_manager: internal_manager,
                external_manager: external_manager
            }),
        });
    
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
    
        const data = await res.json() as PPPO;
    
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function getPPPOById(id: string): Promise<PPPO | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/${id}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as PPPO;
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function getAncestors(id: string): Promise<PPPO[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/Ancestors/${id}`;

    try {
        const res = await fetch(apiUrl);
        console.log("Llega");
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as PPPO[];
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function getStatesByType(type: number): Promise<State[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/StatesType/${type}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as State[];
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function getStateOfPPPO(id: string): Promise<State | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/States/${id}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as PPPO[];
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function lookForBrothersWithCode(id: string, code: string) {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/Brother/?id=${id}&code=${code}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json();
        
        return data; // Devuelve true si hay hermanos con el mismo código, false de lo contrario
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function lookForBrothersAncestorWithCode(id: string, code: string) {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/BrotherAncestor/?id=${id}&code=${code}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json();
        
        return data; // Devuelve true si hay hermanos con el mismo código, false de lo contrario
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function loginUser(email: string, password: string): Promise<Person | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Person/Login/`;
    
    try {
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ email, password })
        });
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function getCompanyById(id: string): Promise<Company | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Companies/${id}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as Company;
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function fetchPortfolios(companyId: string): Promise<PPPO[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Companies/Portfolios/${companyId}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const portfolios = await response.json();
            return portfolios;
        } else {
            throw new Error('Error al obtener portfolios');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function fetchPPPOs(parentId: string): Promise<PPPO[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/Sons/${parentId}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const pppos = await response.json();
            return pppos;
        } else {
            throw new Error('Error al obtener PPPOs');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getPersonsByCompany(companyId: string): Promise<Person[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Persons/by_company/${companyId}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const persons = await response.json();
            return persons;
        } else {
            throw new Error('Error al obtener PPPOs');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function updatePersonExternalManager(pppoId: string, external_pppo: string) {
    // Determinar qué campo usar para buscar a la persona
    
    const apiUrl = `${import.meta.env.BACKEND_URL}/Persons/${external_pppo}`;
    let updateResponse: Response; // Declaramos updateResponse aquí para que esté disponible en todo el alcance de la función
    //let persona = await getPersonById(external_pppo);
    console.log(apiUrl);
    try {
        // Obtener la persona por su external_pppo o internal_pppo
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener la persona');
        }
        const person = await response.json() as Person;
        
        // Actualizar el array pppo_external
        const updatedPppoExternal = [...person.pppo_external, pppoId];

        const updatedUserData = {
            "idPerson": person.idPerson,
            "DNI": person.DNI,
            "name": person.name,
            "email": person.email,
            "pppo_internal": person.pppo_internal,
            "pppo_external": updatedPppoExternal,
            "password": person.password,
            "company": person.company,
            "admin" : person.admin,
        };

        const apiUrlUpdate = `${import.meta.env.BACKEND_URL}/Persons/${person.idPerson}`;
        console.log(person);
        console.log(apiUrlUpdate);
        // Actualizar la persona
        updateResponse = await fetch(apiUrlUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        });

        if (!updateResponse.ok) {
            throw new Error('Error al actualizar la persona');
        }

        // Devolver la persona actualizada
        // return updatedPerson;
        
    } catch (error) {
        console.error('Error:', error);
        console.error('Update failed response:', await updateResponse?.text());
        return null;
    }
}


export async function updatePersonInternalManager(pppoId: string, internal_pppo: string) {
    // Determinar qué campo usar para buscar a la persona
    
    const apiUrl = `${import.meta.env.BACKEND_URL}/Persons/${internal_pppo}`;
    let updateResponse: Response; // Declaramos updateResponse aquí para que esté disponible en todo el alcance de la función
    
    console.log(apiUrl);
    try {
        // Obtener la persona por su external_pppo o internal_pppo
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener la persona');
        }
        const person = await response.json() as Person;
        
        // Actualizar el array pppo_external
        const updatedPppoInternal = [...person.pppo_internal, pppoId];

        const updatedUserData = {
            "idPerson": person.idPerson,
            "DNI": person.DNI,
            "name": person.name,
            "email": person.email,
            "pppo_internal": updatedPppoInternal,
            "pppo_external": person.pppo_external,
            "password": person.password,
            "company": person.company,
            "admin" : person.admin,
        };

        const apiUrlUpdate = `${import.meta.env.BACKEND_URL}/Persons/${person.idPerson}`;
        console.log(person);
        console.log(apiUrlUpdate);
        // Actualizar la persona
        updateResponse = await fetch(apiUrlUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        });

        if (!updateResponse.ok) {
            throw new Error('Error al actualizar la persona');
        }

        // Devolver la persona actualizada
        // return updatedPerson;
        
    } catch (error) {
        console.error('Error:', error);
        console.error('Update failed response:', await updateResponse?.text());
        return null;
    }
}


export async function getPersonById(id: string): Promise<Person | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Persons/${id}`;
    
    try {
        const res = await fetch(apiUrl);
        
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const data = await res.json() as Person;
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function updatePPPO(
    pppoId: string,
    updatedPPPO: PPPO
): Promise<PPPO | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/${pppoId}`;
    let updateResponse: Response;
    console.log(pppoId);
    console.log(updatePPPO);
    try {
        // Realizar la solicitud de actualización del PPPO
        updateResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPPPO),
        });

        if (!updateResponse.ok) {
            throw new Error('Error al actualizar el PPPO');
        }

        // Devolver el PPPO actualizado
        return updatedPPPO;

    } catch (error) {
        console.error('Error:', error);
        console.error('Update failed response:', await updateResponse?.text());
        return null;
    }
}


export async function getStates(): Promise<State[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/States/`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const states = await response.json();
            return states;
        } else {
            throw new Error('Error al obtener portfolios');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getDeletedStatesByType(stateType) {
    const apiUrl = `${import.meta.env.BACKEND_URL}/States/DeletedByType/${stateType}`;
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const state = await response.json();
            return state;
        } else {
            throw new Error('Error al obtener el estado eliminado por tipo');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function createPerson(
    DNI: string,
    name: string,
    email: string,
    password: string,
    company:string
) :Promise<Person> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/Persons/`;
    console.log(apiUrl);
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idPerson: "",
                DNI: DNI, 
                name: name,
                email: email, 
                pppo_internal: [],
                pppo_external: [],
                password: password,
                company: company,
                admin: 0

            }),
        });
    
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
    
        const data = await res.json() as PPPO;
    
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function getPPPOsByIds(ids: string[]): Promise<PPPO[]> {
    const apiUrl = import.meta.env.BACKEND_URL; // Suponiendo que la URL base es la misma
    
    try {
        const ppposPromises = ids.map(async (id) => {
            const url = `${apiUrl}/PPPOs/${id}`;
            const res = await fetch(url);
            
            if (!res.ok) {
                throw new Error(`Error fetching data for ID ${id}: ${res.statusText}`);
            }
            
            return res.json();
        });
        
        const pppos = await Promise.all(ppposPromises);
        
        return pppos;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

// Filtros
export async function fetchFilteredPortfolios(api: string) {
    try {
      const response = await fetch(api);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Error al obtener portfolios');
      }
    } catch (error) {
      console.error(error);
    }
  }

export function buildAPIUrl(company: string,
    parent_id: string,
    search: string,
    planned_valueMin: number,
    planned_valueMax: number,
    actual_costMin: number,
    actual_costMax: number,
    earned_valueMin: number,
    earned_valueMax: number,
    start_dateMin: string,
    start_dateMax: string,
    start_real_dateMin: string,
    start_real_dateMax: string,
    finish_dateMin: string,
    finish_dateMax: string,
    finish_real_dateMin: string,
    finish_real_dateMax: string,
    risk: number,
    priority: number): string {
    const apiUrl = `${import.meta.env.BACKEND_URL}/PPPOs/`;

    // Construir los parámetros de la URL basados en los argumentos proporcionados
    let queryParams = `?`;
    if (company) queryParams += `company=${company}&`;
    if (parent_id && parent_id != "") queryParams += `parent_id=${parent_id}&`;
    if (search) queryParams += `search=${search}&`;
    if (planned_valueMin) queryParams += `planned_valueMin=${planned_valueMin}&`;
    if (planned_valueMax) queryParams += `planned_valueMax=${planned_valueMax}&`;
    if (actual_costMin) queryParams += `actual_costMin=${actual_costMin}&`;
    if (actual_costMax) queryParams += `actual_costMax=${actual_costMax}&`;
    if (earned_valueMin) queryParams += `earned_valueMin=${earned_valueMin}&`;
    if (earned_valueMax) queryParams += `earned_valueMax=${earned_valueMax}&`;
    if (start_dateMin) queryParams += `start_dateMin=${start_dateMin}&`;
    if (start_dateMax) queryParams += `start_dateMax=${start_dateMax}&`;
    if (start_real_dateMin) queryParams += `start_real_dateMin=${start_real_dateMin}&`;
    if (start_real_dateMax) queryParams += `start_real_dateMax=${start_real_dateMax}&`;
    if (finish_dateMin) queryParams += `finish_dateMin=${finish_dateMin}&`;
    if (finish_dateMax) queryParams += `finish_dateMax=${finish_dateMax}&`;
    if (finish_real_dateMin) queryParams += `finish_real_dateMin=${finish_real_dateMin}&`;
    if (finish_real_dateMax) queryParams += `finish_real_dateMax=${finish_real_dateMax}&`;
    if (risk) queryParams += `risk=${risk}&`;
    if (priority) queryParams += `priority=${priority}&`;
    if (risk==0) queryParams += `risk=${risk}&`;
    if (priority==0) queryParams += `priority=${priority}&`;
    // Eliminar el último "&" si está presente en los parámetros
    queryParams = queryParams.slice(0, -1);

    return apiUrl + queryParams;
}
