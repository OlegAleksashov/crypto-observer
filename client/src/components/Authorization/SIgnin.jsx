import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { validateSignin } from "../../assest/signinvalidator";
import { signInUser } from "../../store/action";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    try {
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const handleClick = () => {
    navigate("/");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  const handleCloseErrorMessage = () => {
    setError("");
  };

  const handleSignIn = () => {
    const formData = { email, password };
    const { error } = validateSignin(formData);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
    } else {
      dispatch(signInUser(formData));
      handleClick();
      setError("");
    }
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
        <Button size="md" onClick={handleSignIn}>
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
