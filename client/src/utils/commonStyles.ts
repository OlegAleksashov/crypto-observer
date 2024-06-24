import { CSSProperties } from "react";

export const marginFirst = {
    top: 10,
    right: 50,
    left: 50,
    bottom: 50,
  };
  
  export const marginSecond = {
    top: 10,
    right: 30,
    left: 10,
    bottom: 10,
  };
  
  export const commonMarginStyle = {
    marginLeft: "1rem",
    marginRight: "1rem",
    marginTop: "1rem",
  };
  
  export const marginStyleForLast = {
    marginLeft: "1rem",
    marginRight: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  };
  
  export const stylesForDesktop = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
  };
  
  export const stylesForMobile = {
    display: "flex",
    flexDirection: "column",
    marginRight: "1rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    "& > *": {
      marginBottom: "1rem",
    },
  };
  
  export const COLORS = [
    "rgb(25, 42, 176)",
    "rgb(212, 17, 192)",
    "rgb(12, 232, 225)",
    "rgb(117, 8, 21)",
    "rgb(143, 58, 24)",
    "rgb(175, 207, 19)",
    "rgb(163, 227, 224)",
    "rgb(58, 10, 87)",
    "rgb(5, 66, 19)",
    "rgb(129, 103, 168)",
  ];
  
  export const colorsForPie = [
    "rgb(25, 42, 176)",
    "rgb(212, 17, 192)",
    "rgb(12, 232, 225)",
    "rgb(142, 161, 18)",
    "rgb(143, 58, 24)",
  ];
  
  export const toolTip: CSSProperties = {
    borderRadius: "0.25rem",
    background: "#26313c",
    color: "#fff",
    padding: "1rem",
    boxShadow: "15px 30px 40px 5px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  };