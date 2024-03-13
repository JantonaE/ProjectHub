import React, { useState, useEffect } from 'react';

async function getPortfoliosSons(idPortfolio) {
    const url = "http://127.0.0.1:8000";
    try {
        const response = await fetch(`${url}/Portfolios/PortfolioSons/${idPortfolio}`);
        
        if (response.ok) {
            return await response.json(); // Return the data
        } else {
            throw new Error('Error al obtener portfolios');
        }
    } catch (error) {
        console.error(error);
    }
}

function Dropdown(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      console.log("Entra");
        async function fetchData() {
          console.log("Fetching data...");
          try {
              const result = await getPortfoliosSons(props.id);
              console.log("Data received:", result);
              setData(result); // Set data to an empty array if result is falsy
          } catch (error) {
              console.error(error);
          }
        }
        fetchData();
    }, [props.id]);
    
  
    console.log("Data:", data); // Check what data is being received
    console.log("Id:", props.id);
    return (
        <div>
            <h1>{props.title}</h1>
            {data && data.length > 0 ? ( // Check if data exists and is not empty
                data.map((portfolio) => (
                    <div className="flex border p-2 border-blue-950" key={portfolio.idPortfolio}>
                        <h1>Hola</h1>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Dropdown;
