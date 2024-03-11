import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import InputSearch from "../InputSearch/InputSearch";
import "./Layout.css";

const Layout = () => {
  const input = useInput();
  const [searchTerm, setSearchTerm] = useState("");

  let dateTemp = new Date().toString().split(" ");
  const date =
    dateTemp[0] + " " + dateTemp[1] + " " + dateTemp[2] + " " + dateTemp[3];

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
      <InputSearch onInputChange={handleInputChange} />
    </div>
  );
};

export default Layout;
