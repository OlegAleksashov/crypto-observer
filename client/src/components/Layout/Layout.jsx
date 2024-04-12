import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Categories from "../../card/Categories";
import CustomizedTables from "../Table/CustomizedTables";
import { BarChartCurrency } from "../../charts/BarChartCurrency/BarChartCurrency";
import { PieChartCurrency } from "../../charts/PieChartCurrency/PieChartCurrency";
import HeaderOfCharts from "../HeaderOfCharts/HeaderOfCharts";
import { InnerPieChartCurrency } from "../../charts/InnerPieChartCurrency/InnerPieChartCurrency";
import AreaChartCurrency from "../../charts/AreaChartCurrency/AreaChartCurrency";
import AreaChartLowCurrency from "../../charts/AreaChartLowCurrency/AreaChartLowCurrency";
import { Exchanges } from "../../card/Exchanges";
import { AssetPlatforms } from "../../card/AssetPlatforms";
import Footer from "../Footer/Footer";
import {
  commonMarginStyle,
  marginStyleForLast,
  stylesForDesktop,
  stylesForMobile,
} from "../../utils/commonStyles";
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
import { date } from "../../utils/helpers";
import "./Layout.css";

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = windowWidth >= 660 ? stylesForDesktop : stylesForMobile;

  return (
    <>
      <p id="overview">
        <strong>Overview</strong>
      </p>
      <span>
        Today: <p id="date">{date}</p>
      </span>
      <Box style={style}>
        <Categories />
        <br />
        <Exchanges />
        <br />
        <AssetPlatforms />
      </Box>

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