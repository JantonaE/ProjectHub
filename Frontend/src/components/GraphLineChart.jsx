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
      <h1>Planned Value / Actual Cost</h1>
      <div className="App">
        <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="ac" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;