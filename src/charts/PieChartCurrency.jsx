//import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fetchData } from "../store/action";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export const PieChartCurrency = () => {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  //const [volume, setVolume] = useState([]);

  // const fetchVolume = () => {
  //   axios
  //     .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
  //       headers: { Accept: "application-json" },
  //     })
  //     .then((response) => {
  //       setVolume(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   fetchVolume();
  // }, []);

  const filteredData = volume
    .slice()
    .sort((a, b) => b.total_volume - a.total_volume)
    .slice(0, 3)
    .map((currency) => ({
      name: currency.name,
      value: currency.total_volume,
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
        fontSize={"1.5rem"}
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${filteredData[index].name} - ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={195}
          fill="#8884d8"
          dataKey="value"
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
