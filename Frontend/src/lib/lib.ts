import PPPO from "../api/models/PPPOInput"

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
    parent_id: string
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
                PPPO: radioButton
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
