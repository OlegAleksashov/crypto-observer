import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { fetchData } from "../../store/action";
import { customTooltip } from "../../utils/helpers";
import { COLORS } from "../../utils/commonStyles";
import { CoinPrice } from "../../../interfaces/commonInterfaces";

export const BarChartCurrency: FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const marketPrice = useAppSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
    setLoading(false);
  }, [dispatch]);

  const filteredData = Object.entries(marketPrice)
    .map(([nmae, coin]) => ({
      name: coin.name,
      current_price: (coin as CoinPrice).current_price,
    }))
    .sort((a, b) => b.current_price - a.current_price)
    .slice(0, 10);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={filteredData}
        margin={{ top: 10, right: 30, left: 20, bottom: 100 }}
      >
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: "1rem" }}
          angle={-45}
          textAnchor="end"
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip content={customTooltip} />
        <Bar dataKey="current_price">
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
