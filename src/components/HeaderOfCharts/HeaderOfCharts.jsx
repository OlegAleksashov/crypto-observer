import { Card, CardHeader } from "@mui/material";
import React from "react";

const HeaderOfCharts = ({ children, title, subheader }) => {
  return (
    <Card sx={{ backgroundColor: "rgb(31, 37, 61)", color: "#fff" }}>
      <CardHeader title={title} subheader={subheader} />
      {children}
    </Card>
  );
};

export default HeaderOfCharts;
