import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { fetchData } from "../../store/action";
import { colorsForPie } from "../../utils/commonStyles";
import { customTooltip } from "../../utils/helpers";
import { stylesForDiv } from "../PieChartCurrency/PieChartCurrencyStyles";

interface Coin {
  name: string;
  current_price: number;
}

export const InnerPieChartCurrency = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const volume = useAppSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    dispatch(fetchData());
    setLoading(false);
  }, [dispatch]);

  const filteredData = Object.entries(volume)
    .map(([name, coin]) => ({
      name: coin.name,
      current_price: (coin as Coin).current_price,
    }))
    .sort((a, b) => a.current_price - b.current_price)
    .filter((coin) => coin.current_price > 100)
    .slice(0, 5);

  return (
    <ResponsiveContainer width="100%" height={400}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={stylesForDiv as React.CSSProperties}>
          <PieChart width={350} height={350}>
            <Pie
              data={filteredData}
              dataKey="current_price"
              nameKey="name"
              isAnimationActive={false}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={160}
              innerRadius={70}
            >
              {filteredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorsForPie[index % colorsForPie.length]}
                />
              ))}
            </Pie>
            <Tooltip content={customTooltip} />
          </PieChart>
          <Stack gap={2}>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {colorsForPie.map((color, i) => (
                <Stack key={color} alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: "2rem",
                      height: "1rem",
                      background: color,
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Typography sx={{ opacity: 0.7, color: "#fff" }}>
                    {filteredData[i]?.name}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </div>
      )}
    </ResponsiveContainer>
  );
};

/*
const RADIAN = Math.PI / 180;

ResponsiveContainer

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
  };*/
