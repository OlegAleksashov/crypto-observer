import React, { useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie as ChartPieIcon } from "@fortawesome/free-solid-svg-icons";
import { fetchAssetPlatforms } from "../store/action";
import { PersonalCard } from "./PersonalCard";

library.add(ChartPieIcon);

export const AssetPlatforms = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const platforms = useSelector((state) => state.fetch.assetPlatforms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAssetPlatforms());
    setLoading(false);
  }, [dispatch]);

  return (
    <PersonalCard
      text="ASSET PLATFORMS"
      value={loading ? <p>Loading...</p> : platforms.length}
      color={theme.palette.success.light}
      icon={ChartPieIcon}
    />
  );
};