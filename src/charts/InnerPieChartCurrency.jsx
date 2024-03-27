import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fetchData } from "../store/action";
import {list} from '../const/value'

const COLORS = [
  "rgb(25, 42, 176)",
  "rgb(212, 17, 192)",
  "rgb(12, 232, 225)",
  "rgb(142, 161, 18)",
  "rgb(143, 58, 24)",
];

const RADIAN = Math.PI / 180;

const InnerPieChartCurrency = () => {
  // const dispatch = useDispatch();
  // const volume = useSelector((state) => state.fetch.allCoins);

  // useEffect(() => {
  //     dispatch(fetchData());
  // }, [dispatch]);

  // const filteredData = volume
  //   .slice()
  //   .sort((a, b) => a.current_price - b.current_price)
  //   .filter((coin) => coin.current_price > 100)
  //   .slice(0, 5)
  //   .map((currency) => ({
  //     name: currency.name,
  //     value: currency.current_price,
  //   }));

    const filteredData = list
    .slice()
    .sort((a, b) => a.current_price - b.current_price)
    .filter((coin) => coin.current_price > 100)
    .slice(0, 5)
    .map((currency) => ({
      name: currency.name,
      value: currency.current_price,
    }));

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${filteredData[index].name} - ${filteredData[index].value}$`}
      </text>
    );
  };
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400} margin={{top: 50,
            right: 30,
            left: 20,
            bottom: 100,}}>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
          innerRadius={70}
          label={renderCustomizedLabel}
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InnerPieChartCurrency;
