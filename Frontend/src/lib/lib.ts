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
    actual_cost: Number,
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
    console.log("LIB: ");
    console.log(radioButton);
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
