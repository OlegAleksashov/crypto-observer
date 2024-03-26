import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
//import { useMediaQuery } from "@mui/material";
import {assetPlatforms} from '../const/value'
import { PersonalCard } from "./PersonalCard";
import { fetchAssetPlatforms } from "../store/action";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie as ChartPieIcon } from "@fortawesome/free-solid-svg-icons";
library.add(ChartPieIcon);

export const AssetPlatforms = () => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const platforms = useSelector((state) => state.fetch.assetPlatforms);

  // useEffect(() => {
  //   dispatch(fetchAssetPlatforms());
  // }, [dispatch]);

  // console.log(platforms);

  return (
    <PersonalCard
      text="ASSET PLATFORMS"
      value={assetPlatforms.length}
      color={theme.palette.primary.dark}
      icon={ChartPieIcon}
      // style={{
      //   padding: isMd ? "20px" : "10px",
      //   fontSize: isMd ? "18px" : "14px",
      // }}
    />
  );
};
