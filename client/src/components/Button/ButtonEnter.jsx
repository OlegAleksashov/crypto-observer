import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Signup from "../Authorization/SIgnup";
//import useMediaQuery from "@mui/material/useMediaQuery";
//import { useTheme } from "@mui/material/styles";
/*import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";*/

const ButtonEnter = () => {
  //const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ marginLeft: "1rem" }}>
           <Button
        onClick={handleClickOpen}
        variant="outlined"
        size="small"
        sx={{ background: "rgb(177, 209, 227);" }}
      >
        Enter
      </Button>
      <Dialog
        //fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Signup />
      </Dialog>
    </div>
  );
};

export default ButtonEnter;