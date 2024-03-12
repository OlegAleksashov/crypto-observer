import React, { useState } from "react";
import { Grid, Table } from "@mui/material";
// import useInput from "../../hooks/useInput";
import InputSearch from "../InputSearch/InputSearch";
import Categories from "../../card/Categories";
import CustomizedTables from '../../Table/CustomizedTables'
import "./Layout.css";

const Layout = () => {
  // const input = useInput();
  const [searchTerm, setSearchTerm] = useState("");

  let date = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  //   const filteredTasks = tasks.filter(
  //     (task) =>
  //       typeof task.title === "string" &&
  //       task.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

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
      <InputSearch onInputChange={handleInputChange} />
      <CustomizedTables/>
    </div>
  );
};

export default Layout;
