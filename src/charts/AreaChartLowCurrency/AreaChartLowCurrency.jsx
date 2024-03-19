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
import "./AreaChartLowCurrency.css";
import { fetchData } from "../../store/action";

const AreaChartLowCurrency = () => {
  const dispatch = useDispatch();
  const atl = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = atl
    .slice()
    .sort((a, b) => b.atl - a.atl)
    .slice(0, 5)
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
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(161, 18, 18)" stopOpacity={0.4} />
            <stop
              offset="75%"
              stopColor="rgb(161, 18, 18)"
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>
        <Area dataKey="value" stroke="rgb(161, 18, 18)" fill="url(#color1)" />
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
        <CartesianGrid opacity={0.1} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartLowCurrency;
