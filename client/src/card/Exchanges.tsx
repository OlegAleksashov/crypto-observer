import { useEffect, useState, FC } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useTheme } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartArea as ChartAreaIcon } from "@fortawesome/free-solid-svg-icons";
import { fetchExchanges } from "../store/action";
import { PersonalCard } from "./PersonalCard";

library.add(ChartAreaIcon);

export const Exchanges: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const exchanges = useAppSelector((state) => state.fetch.exchanges);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchExchanges());
    setLoading(false);
  }, [dispatch]);

  return (
    <PersonalCard
      text="EXCHANGES"
      value={loading ? "Loading..." : Object.keys(exchanges).length}
      color={theme.palette.warning.light}
      icon={ChartAreaIcon}
    />
  );
};
