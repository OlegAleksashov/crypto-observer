import React from "react";
import { Grid } from "@mui/material";
import Categories from "../../card/Categories";
import "./Layout.css";
import CustomizedTables from "../Table/CustomizedTables";
import { BarChartMarketPrice } from "../../charts/BarChartMarketPrice";
import HeaderOfCharts from "../HeaderOfCharts/HeaderOfCharts";
import {
  priceHeader,
  priceTitle,
  athHeader,
  athTitle,
  cheapHeader,
  cheapTitle,
  volumeHeader,
  volumeTitle,
  capHeader,
  capTitle,
} from "../../const/titles";

const Layout = () => {
  let date = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="main">
      <p id="overview">
        <strong>Overview</strong>
      </p>
      <span className="date">
        Today: <p id="date">{date}</p>
      </span>
      <Grid container spacing={1}>
        <Grid marginLeft={1} marginTop={1} item xs={2.5}>
          <Categories />
        </Grid>
      </Grid>
      <CustomizedTables />
      <HeaderOfCharts title={priceHeader} subheader={priceTitle}>
        <BarChartMarketPrice />
      </HeaderOfCharts>
      <HeaderOfCharts title={athHeader} subheader={athTitle}></HeaderOfCharts>
      <HeaderOfCharts
        title={cheapHeader}
        subheader={cheapTitle}
      ></HeaderOfCharts>
      <HeaderOfCharts title={athHeader} subheader={athTitle}></HeaderOfCharts>
      <HeaderOfCharts
        title={volumeHeader}
        subheader={volumeTitle}
      ></HeaderOfCharts>
      <HeaderOfCharts title={capHeader} subheader={capTitle}></HeaderOfCharts>
    </div>
  );
};

export default Layout;
