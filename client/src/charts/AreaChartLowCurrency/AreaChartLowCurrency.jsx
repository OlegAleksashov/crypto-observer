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
import { marginFirst, marginSecond } from "../../utils/commonStyles";

const AreaChartLowCurrency = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const atl = useSelector((state) => state.fetch.allCoins);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchData());
    setLoading(false);
  }, [dispatch]);

  const filteredData = atl
    .slice()
    .sort((a, b) => b.atl - a.atl)
    .slice(0, 5)
    .map((coin) => ({
      name: coin.name,
      value: coin.atl,
    }));

  const currencyFormatter = (value) => {
    return formatNumber(value);
  };
  
  const margin = windowWidth >= 450 ? marginFirst : marginSecond;

  const interval = windowWidth >= 450 ? 0 : -1;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={loading ? <p>Loading...</p> : filteredData}
        margin={margin}
      >
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
          interval={interval}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(value) => currencyFormatter(value)}
        />
        <Tooltip content={customTooltip} />
        <CartesianGrid opacity={0.05} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartLowCurrency;