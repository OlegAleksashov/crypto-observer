import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BarChartMarketPrice = () => {
  const [marketPrice, setMarketPrice] = useState([]);

  const fetchMarketPrice = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: { Accept: "application-json" },
      })
      .then((response) => {
        console.log(response.data);
        setMarketPrice(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMarketPrice();
  }, []);

  const filteredData = marketPrice
    .slice()
    .sort((a, b) => b.current_price - a.current_price)
    .slice(0, 10);

  return (
    <ResponsiveContainer width='95%' height={400}>
      <BarChart width={500} height={300} data={filteredData}>
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ fontSize: "1rem" }}
          angle={-25}
          textAnchor="end"
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="current_price" fill="#8884d8" name="Current Price" />
        <Bar dataKey="Name" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
