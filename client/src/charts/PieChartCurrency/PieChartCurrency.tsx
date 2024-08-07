import { useEffect, useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Box, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { fetchData } from "../../store/action";
import { customTooltip } from "../../utils/helpers";
import { COLORS, stylesForDiv } from "./PieChartCurrencyStyles";
import { CoinTotal } from "../../../interfaces/commonInterfaces";

export const PieChartCurrency: FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const volume = useAppSelector((state) => state.fetch.allCoins);

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        await dispatch(fetchData());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchMainData();
  }, [dispatch]);

  const filteredData = Object.entries(volume)
    .map(([name, coin]) => ({
      name: coin.name,
      total_volume: (coin as CoinTotal).total_volume,
    }))
    .sort((a, b) => b.total_volume - a.total_volume)
    .filter((coin) => coin.total_volume > 100)
    .slice(0, 3);

  return (
    <ResponsiveContainer width="100%" height={400}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={stylesForDiv as React.CSSProperties}>
          <PieChart width={350} height={350}>
            <Pie
              data={filteredData}
              dataKey="total_volume"
              nameKey="name"
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={160}
            >
              {filteredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={customTooltip} />
          </PieChart>
          <Stack gap={2}>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {COLORS.map((color, i) => (
                <Stack key={color} alignItems="center" spacing={0.5}>
                  <Box
                    sx={{
                      width: "2rem",
                      height: "1rem",
                      background: color,
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Typography sx={{ opacity: 0.6, color: "#fff" }}>
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

//const [volume, setVolume] = useState([]);

/* 
const fetchVolume = () => {
     axios
       .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
         headers: { Accept: "application-json" },
       })
       .then((response) => {
         setVolume(response.data);
       })
       .catch((error) => console.log(error));
   };

   useEffect(() => {
     fetchVolume();
   }, []);
   */
