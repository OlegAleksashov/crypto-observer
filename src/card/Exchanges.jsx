import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { PersonalCard } from "./PersonalCard";
import { exchanges } from "../const/value";
import { fetchExchanges } from "../store/action";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartArea as ChartAreaIcon } from "@fortawesome/free-solid-svg-icons";
library.add(ChartAreaIcon);

export const Exchanges = () => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const exchange = useSelector((state) => state.fetch.exchanges);

  // useEffect(() => {
  //   dispatch(fetchExchanges());
  // }, [dispatch]);

  // console.log(exchange);

  return (
    <PersonalCard
      text="EXCHANGES"
      value={exchanges.length}
      color={theme.palette.error.dark}
      icon={ChartAreaIcon}
    />
  );
};
