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

export const BarChartCurrency = () => {
  const [marketPrice, setMarketPrice] = useState([]);

  //const COLORS = ["rgb(25, 42, 176)", "rgb(212, 17, 192)", "rgb(12, 232, 225)", "rgb(142, 161, 18)", 'rgb(143, 58, 24)'];

  const fetchMarketPrice = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: { Accept: "application-json" },
      })
      .then((response) => {
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
    <ResponsiveContainer width="95%" height={400}>
      <BarChart width={500} height={300} data={filteredData}>
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ fontSize: "1rem" }}
          angle={-25}
          textAnchor="end"
          axisLine={false}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="current_price"
          fill="rgb(25, 42, 176)"
          name="Current Price"
          label
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
