import axios from "axios";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export const PieChartCurrency = () => {
  const [volume, setVolume] = useState([]);

  const fetchVolume = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: { Accept: "application-json" },
      })
      .then((response) => {
        setVolume(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchVolume();
  }, []);

  const filteredData = volume
    .slice()
    .sort((a, b) => b.total_volume - a.total_volume)
    .slice(0, 3)
    .map((currency) => ({
      name: currency.name,
      value: currency.total_volume,
    }));

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={400} height={400}>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          //label={(props) => renderCustomizedLabel(props, filteredData)}
          //label={({ name }) => <Label value={name} position="center" />}
          label={({ name }) => <Label value={name} position="center" />}
          outerRadius={95}
          fill="#8884d8"
          dataKey="value"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
