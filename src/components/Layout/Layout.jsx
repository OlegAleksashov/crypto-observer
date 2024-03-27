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
  atlHeader,
  atlTitle,
} from "../../const/titles";
import "./Layout.css";
import InnerPieChartCurrency from "../../charts/InnerPieChartCurrency";
import AreaChartCurrency from "../../charts/AreaChartCurrency/AreaChartCurrency";
import AreaChartLowCurrency from "../../charts/AreaChartLowCurrency/AreaChartLowCurrency";
import { Exchanges } from "../../card/Exchanges";
import { AssetPlatforms } from "../../card/AssetPlatforms";
import Footer from "../Footer/Footer";

const commonMarginStyle = {
  marginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "1rem",
};

const marginStyleForLast = {
  marginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const Layout = () => {
  let date = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <p id="overview">
        <strong>Overview</strong>
      </p>
      <span>
        Today: <p id="date">{date}</p>
      </span>
      <Grid
        className="grid"
        marginLeft={5}
        marginRight={5}
        marginTop={1}
        marginBottom={1}
        justifyContent="space-between"
      >
        <Categories />
        <Exchanges />
        <AssetPlatforms />
      </Grid>

      <div style={commonMarginStyle}>
        <CustomizedTables />
      </div>

      <div style={commonMarginStyle}>
        <HeaderOfCharts title={priceHeader} subheader={priceTitle}>
          <BarChartCurrency />
        </HeaderOfCharts>
      </div>

      <div style={commonMarginStyle}>
        <HeaderOfCharts title={atlHeader} subheader={atlTitle}>
          <AreaChartLowCurrency />
        </HeaderOfCharts>
      </div>

      <div
        className="doubleChart"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "1rem",
          marginLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <HeaderOfCharts title={cheapHeader} subheader={cheapTitle}>
          <InnerPieChartCurrency />
        </HeaderOfCharts>

        <HeaderOfCharts title={volumeHeader} subheader={volumeTitle}>
          <PieChartCurrency />
        </HeaderOfCharts>
      </div>

      <div style={marginStyleForLast}>
        <HeaderOfCharts title={athHeader} subheader={athTitle}>
          <AreaChartCurrency />
        </HeaderOfCharts>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
