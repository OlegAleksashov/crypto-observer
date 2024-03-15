import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./AreaChartCurrency.css";

const AreaChartCurrency = () => {
  const [ath, setAth] = useState([]);

  const fetchAllTimeHigh = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: { Accept: "application-json" },
      })
      .then((response) => {
        setAth(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllTimeHigh();
  }, []);

  const filteredData = ath
    .slice()
    .sort((a, b) => b.ath - a.ath)
    .slice(0, 10)
    .map((coin) => ({
      name: coin.name,
      value: coin.ath,
    }));

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const customTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="toolTip">
          <h4>{label}</h4>
          <p>${payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={filteredData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          angle={-25}
          textAnchor="end"
          interval={0}
          tick={{ fontSize: "1rem" }}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(value) => currencyFormatter.format(value)}
        />
        <Tooltip content={customTooltip} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartCurrency;
