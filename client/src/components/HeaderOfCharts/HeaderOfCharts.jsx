import { Card, CardHeader, Typography } from "@mui/material";
import React from "react";

const HeaderOfCharts = ({ children, title, subheader }) => {
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