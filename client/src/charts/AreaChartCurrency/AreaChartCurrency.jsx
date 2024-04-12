import React, { useEffect, useState } from "react";
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
import { fetchData } from "../../store/action";
import { formatNumber, customTooltip } from "../../utils/helpers";
import {
  stopStylesUp,
  stopStylesDown,
  margin,
} from "./AreaChartCurrencyStyles";

const AreaChartCurrency = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const ath = useSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
    setLoading(false);
  }, [dispatch]);

  const filteredData = ath
    .slice()
    .sort((a, b) => b.ath - a.ath)
    .slice(0, 10)
    .map((coin) => ({
      name: coin.name,
      value: coin.ath,
    }));

  const currencyFormatter = (value) => {
    return formatNumber(value);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={loading ? <p>Loading...</p> : filteredData}
        margin={margin}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop style={stopStylesUp} />
            <stop style={stopStylesDown} />
          </linearGradient>
        </defs>
        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          angle={-45}
          textAnchor="end"
          interval="preserveStartEnd"
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