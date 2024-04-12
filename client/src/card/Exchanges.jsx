import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartArea as ChartAreaIcon } from "@fortawesome/free-solid-svg-icons";
import { fetchExchanges } from "../store/action";
import { PersonalCard } from "./PersonalCard";

library.add(ChartAreaIcon);

export const Exchanges = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const exchanges = useSelector((state) => state.fetch.exchanges);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchExchanges());
    setLoading(false);
  }, [dispatch]);

  return (
    <PersonalCard
      text="EXCHANGES"
      value={loading ? <p>Loading...</p> : exchanges.length}
      color={theme.palette.warning.light}
      icon={ChartAreaIcon}
    />
  );
};