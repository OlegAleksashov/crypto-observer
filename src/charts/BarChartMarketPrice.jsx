import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  // Cell,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
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
        //console.log(response.data)
        setMarketPrice(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMarketPrice();
  }, []);

  const dataKeys = marketPrice.filter((coin) => {
    console.log(coin.current_price);
    return coin.current_price !== undefined;
});

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={dataKeys}>
        <Bar dataKey='market_cap'/>
      </BarChart>
    </ResponsiveContainer>
  );
};

