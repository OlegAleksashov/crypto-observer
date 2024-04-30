import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
//import { useSelector } from "react-redux";


const ButtonEnter = () => {
  const navigate = useNavigate();
  //let isAuth = useSelector((state) => state.auth.isAuth);

  const handleClick = () => {
    navigate("/");
    
  };
  return (
    <Link to="/">
      <Button
        variant="outlined"
        size="small"
        sx={{ background: "rgb(177, 209, 227);" }}
        onClick={handleClick}
      >
        Log out
      </Button>
    </Link>
  );
};

export default ButtonEnter;
