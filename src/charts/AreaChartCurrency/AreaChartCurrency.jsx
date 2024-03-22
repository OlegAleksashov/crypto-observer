import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchData } from "../../store/action";

const AreaChartCurrency = () => {
  const dispatch = useDispatch();
  const ath = useSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = ath
    .slice()
    .sort((a, b) => b.ath - a.ath)
    .slice(0, 10)
    .map((coin) => ({
      name: coin.name,
      value: coin.ath,
    }));

  const formatNumber = (number) => {
    if (Math.abs(number) < 1e3) return number;
    const sign = Math.sign(number);
    const absNumber = Math.abs(number);
    const abbreviated = ["K", "M", "B", "T"];
    const abbreviatedNumber = abbreviated.reduce((acc, curr, index) => {
      const value = absNumber / Math.pow(1e3, index + 1);
      if (value >= 1) {
        return `${(sign * value).toFixed(1)}${curr}`;
      }
      return acc;
    }, "");
    return abbreviatedNumber;
  };

  const currencyFormatter = (value) => {
    return formatNumber(value);
  };

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
    <ResponsiveContainer width="100%" height={400}>
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
          tickFormatter={(value) => currencyFormatter(value)}
        />
        <Tooltip content={customTooltip} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartCurrency;
