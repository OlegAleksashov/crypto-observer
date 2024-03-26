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
  Cell,
} from "recharts";
import { fetchData } from "../store/action";
import { list } from "../const/value";

export const BarChartCurrency = () => {
  // const dispatch = useDispatch();
  // const marketPrice = useSelector((state) => state.fetch.allCoins);

  const COLORS = [
    "rgb(25, 42, 176)",
    "rgb(212, 17, 192)",
    "rgb(12, 232, 225)",
    "rgb(117, 8, 21)",
    "rgb(143, 58, 24)",
    "rgb(175, 207, 19)",
    "rgb(163, 227, 224)",
    "rgb(58, 10, 87)",
    "rgb(5, 66, 19)",
    "rgb(129, 103, 168)",
  ];

  // useEffect(() => {
  //     dispatch(fetchData());
  // }, [dispatch]);

  // const filteredData = marketPrice
  //   .slice()
  //   .sort((a, b) => b.current_price - a.current_price)
  //   .slice(0, 10);

  const filteredData = list
    .slice()
    .sort((a, b) => b.current_price - a.current_price)
    .slice(0, 10);

  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={filteredData}
        margin={{ top: 10, right: 30, left: 20, bottom: 50 }}
      >
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
        <Bar dataKey="current_price" name="Current Price">
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
