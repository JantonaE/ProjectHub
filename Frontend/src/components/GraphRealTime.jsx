import React from "react";

import {
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid
} from "recharts";

const App = ({data}) => {
    

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 50, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="ac" stroke="#82ca9d" />
        <Line type="monotone" dataKey="ev" stroke="#26234c" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;