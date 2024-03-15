import React from "react";
import { Grid } from "@mui/material";
import Categories from "../../card/Categories";
import CustomizedTables from "../Table/CustomizedTables";
import { BarChartCurrency } from "../../charts/BarChartCurrency";
import { PieChartCurrency } from "../../charts/PieChartCurrency";
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
  atlHeader,
  atlTitle,
} from "../../const/titles";
import "./Layout.css";
import InnerPieChartCurrency from "../../charts/InnerPieChartCurrency";
import AreaChartCurrency from "../../charts/AreaChartCurrency/AreaChartCurrency";

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
        <BarChartCurrency />
      </HeaderOfCharts>
      <HeaderOfCharts title={volumeHeader} subheader={volumeTitle}>
        <PieChartCurrency />
      </HeaderOfCharts>
      <HeaderOfCharts title={athHeader} subheader={athTitle}>
        <AreaChartCurrency />
      </HeaderOfCharts>
      <HeaderOfCharts title={cheapHeader} subheader={cheapTitle}>
        <InnerPieChartCurrency />
      </HeaderOfCharts>
      <HeaderOfCharts title={atlHeader} subheader={atlTitle}></HeaderOfCharts>
      <HeaderOfCharts title={capHeader} subheader={capTitle}></HeaderOfCharts>
    </div>
  );
};

export default Layout;
