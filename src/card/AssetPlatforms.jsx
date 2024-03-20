import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { PersonalCard } from "./PersonalCard";
import { fetchAssetPlatforms } from "../store/action";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie as ChartPieIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartPieIcon);

export const AssetPlatforms = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchAssetPlatforms());
  }, [dispatch]);

  return (
    <PersonalCard
      text="ASSET PLATFORMS"
      value={platforms.length}
      color={theme.palette.primary.dark}
      icon={ChartPieIcon}
    />
  );
};