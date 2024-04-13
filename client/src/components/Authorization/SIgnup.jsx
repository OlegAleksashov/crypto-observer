import React, { useState } from "react";
import "./authorization.css";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";
import { validateSignup } from "../../assest/validador";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = () => {
    const payload = { name, email, password, confirmPassword };
    const { error } = validateSignup(payload);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
    } else {
      setError(null);
      // TODO: Perform signup action here
    }
  };

  return (
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
      <Typography variant="h5" sx={{ color: "black" }}>
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
      <Button size="md" onClick={handleSignup}>
        Sign up
      </Button>
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Signup;
