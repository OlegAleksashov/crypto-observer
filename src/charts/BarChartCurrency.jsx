import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchData } from "../store/action";

export const BarChartCurrency = () => {
  const dispatch = useDispatch();
  const marketPrice = useSelector((state) => state.fetch.allCoins);

  //const COLORS = ["rgb(25, 42, 176)", "rgb(212, 17, 192)", "rgb(12, 232, 225)", "rgb(142, 161, 18)", 'rgb(143, 58, 24)'];

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

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
