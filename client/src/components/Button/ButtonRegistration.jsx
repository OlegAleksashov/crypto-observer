import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { valideteSignUp } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import {
  setPassword,
  setName,
  setEmail,
  setConfirmPassword,
} from "../../store/action";

const ButtonRegistration = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(user.errorMessage);

  /*Handler for Sign UP section*/

  const handleSignup = () => {
    dispatch(
      valideteSignUp(user)
    );
  };

  /*Handlers for Button-Dialog section*/

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*Handler for Modal section*/

  const handleCloseErrorMessage = () => {
    setError(null);
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      {/*section Button-Dialog*/}

      <Button
        onClick={handleClickOpen}
        variant="outlined"
        size="small"
        sx={{ background: "rgb(177, 209, 227);" }}
      >
        Registration
      </Button>
      <Dialog
        fullScreen={fullScreen}
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
      ></Dialog>

      {/*section Modal*/}

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="plain"
            sx={{ m: 1 }}
            onClick={handleCloseErrorMessage}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Registration
          </Typography>

          {/*section Sign UP*/}

          <Box
            sx={{
              width: "20rem",
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <Input
              size="lg"
              value={user.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              type="text"
              placeholder="Enter your name..."
            ></Input>
            <Input
              size="lg"
              value={user.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              type="text"
              placeholder="Enter email..."
            ></Input>
            <Input
              size="lg"
              value={user.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              type="password"
              placeholder="Enter password..."
            ></Input>
            <Input
              size="lg"
              value={user.confirmdPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              type="password"
              placeholder="Confirm password..."
            ></Input>
            <Button size="md" onClick={handleSignup}>
              Register
            </Button>
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </Box>
        </Sheet>
      </Modal>
    </div>
  );
};

export default ButtonRegistration;
