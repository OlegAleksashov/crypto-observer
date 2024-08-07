import { FC } from "react";
import Button from "@mui/material/Button";
import { IButtonExit } from "../../../interfaces/commonInterfaces";

const ButtonExit: FC<IButtonExit> = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ background: "rgb(177, 209, 227);" }}
      onClick={onClick}
    >
      Log out
    </Button>
  );
};

export default ButtonExit;
