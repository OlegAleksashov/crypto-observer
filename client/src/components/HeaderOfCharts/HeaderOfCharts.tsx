import { FC, ReactNode } from "react";
import { Card, CardHeader, Typography } from "@mui/material";

interface IHeaderOfCharts {
  children: ReactNode,
  title: String,
  subheader: String,
}

const HeaderOfCharts: FC<IHeaderOfCharts> = ({ children, title, subheader }) => {
  return (
    <Card sx={{ backgroundColor: "rgb(31, 37, 61)" }}>
      <CardHeader
        title={
          <Typography variant="h5" sx={{ color: "#fff" }}>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" sx={{ color: "#a9acba" }}>
            {subheader}
          </Typography>
        }
      />
      {children}
    </Card>
  );
};

export default HeaderOfCharts;