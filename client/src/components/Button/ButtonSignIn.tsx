import { FC } from "react";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";

const ButtonSignIn: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signin");
  };
  return (
    <Link to="/signin">
      <Button
        variant="outlined"
        size="small"
        sx={{ background: "rgb(177, 209, 227);" }}
        onClick={handleClick}
      >
        Sign in
      </Button>
    </Link>
  );
};

export default ButtonSignIn;
