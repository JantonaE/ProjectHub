import PPPO from "../api/models/PPPOInput"
import State from "../api/models/State"

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


export async function getTypesOfPPPObyType(type: number): Promise<PPPO[] | null> {
    const apiUrl = `${import.meta.env.BACKEND_URL}/StatesType/${type}`;
    
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
