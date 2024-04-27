import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { validateSignin } from "../../assest/signinvalidator";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/action";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  const handleCloseErrorMessage = () => {
    setError("");
  };

  const handleSignup = () => {
    const formData = { email, password };
    const { error } = validateSignin(formData);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
    } else {
      setError(null);
    }
    dispatch(signInUser(formData));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
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
        <Button size="md" onClick={handleClick}>
          Home
        </Button>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          Log in
        </Typography>
        <Input
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email..."
        ></Input>
        <Input
          size="lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password..."
        ></Input>
        <Button size="md" onClick={handleSignup}>
          Sign in
        </Button>
        <Button size="md" onClick={handleClickSignup}>
          Still don't have an acount
        </Button>
        {error && (
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={true}
            onClose={handleCloseErrorMessage}
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
              <Typography sx={{ margin: "15px" }}>{error}</Typography>
            </Sheet>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default Signin;
