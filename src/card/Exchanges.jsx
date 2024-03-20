import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { PersonalCard } from "./PersonalCard";
import { fetchCategories } from "../store/action";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartArea as ChartAreaIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartAreaIcon);

export const Exchanges = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log(exchange.length)

  return (
    <PersonalCard
      text="EXCHANGES"
      value={exchange.length}
      color={theme.palette.success.light}
      icon={ChartAreaIcon}
    />
  );
};
