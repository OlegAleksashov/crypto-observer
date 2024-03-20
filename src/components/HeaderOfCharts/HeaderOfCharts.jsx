import { Card, CardHeader } from "@mui/material";
import React from "react";

const HeaderOfCharts = ({ children, title, subheader }) => {
  return (
    <Card sx={{ backgroundColor: "rgb(31, 37, 61)", color: "#fff" }}>
      <CardHeader title={title} subheader={subheader} sx={{color:"rgb(169, 172, 186)"}}/>
      {children}
    </Card>
  );
};

export default HeaderOfCharts;
