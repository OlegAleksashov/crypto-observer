import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { validateRegister } from "../../assest/registerValidador";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/action";

// TODO:

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    const formData = { name, email, password, confirmPassword };
    const { error } = validateRegister(formData);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
    } else {
      setError(null);
    }
    dispatch(signInUser(formData));
  };

  const handleCloseErrorMessage = () => {
    setError("");
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
          Registration
        </Typography>
        <Input
          size="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name..."
        ></Input>
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
        <Input
          size="lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm password..."
        ></Input>
        <Button size="md" onClick={handleSubmit}>
          Sign up
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

export default Signup;
