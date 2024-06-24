import { useEffect, useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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

interface Coin {
  name: string;
  ath: number;
}

const AreaChartCurrency: FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const ath = useAppSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
    setLoading(false);
  }, [dispatch]);

  const filteredData = Object.entries(ath)
    .map(([name, coin]) => ({ name: coin.name, ath: (coin as Coin).ath }))
    .sort((a, b) => b.ath - a.ath)
    .slice(0, 10);

  const currencyFormatter = (value: number) => {
    return formatNumber(value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={filteredData} margin={margin}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop style={stopStylesUp} />
            <stop style={stopStylesDown} />
          </linearGradient>
        </defs>
        <Area dataKey="ath" stroke="#2451B7" fill="url(#color)" />
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
          dataKey="ath"
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
