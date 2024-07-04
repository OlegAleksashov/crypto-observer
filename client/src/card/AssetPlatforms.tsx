import { useEffect, useState, FC } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useTheme } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie as ChartPieIcon } from "@fortawesome/free-solid-svg-icons";
import { fetchAssetPlatforms } from "../store/action";
import { PersonalCard } from "./PersonalCard";

library.add(ChartPieIcon);

export const AssetPlatforms: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const platforms = useAppSelector((state) => state.fetch.assetPlatforms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAssetPlatforms());
    setLoading(false);
  }, [dispatch]);

  return (
    <PersonalCard
      text="ASSET PLATFORMS"
      value={loading ? "Loading..." : Object.keys(platforms).length}
      color={theme.palette.success.light}
      icon={ChartPieIcon}
    />
  );
};
