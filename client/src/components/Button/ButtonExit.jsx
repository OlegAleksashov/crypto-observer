import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";

const ButtonExit = () => {
  const navigate = useNavigate();

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

export default ButtonExit;
