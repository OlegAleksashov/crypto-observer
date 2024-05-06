// TODO: When my modal appears with errorMessage I am not be able to close it by clicking on the cross
// TODO: When user signed up I want to redirect him from SIgm up page to Home and it has to be without profile
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
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../store/action";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.error);
  const successMessage = useSelector((state) => state.auth.user);

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    const formData = { name, email, password, confirmPassword };
    const { error } = validateRegister(formData);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
      setOpen(!open);
    } else {
      dispatch(signUpUser(formData));
      setOpen(!open);
      setConfirmPassword("");
      setPassword("");
      setEmail("");
      setName("");
      setError("");
    }
  };

  const handleClose = () => {
    setOpen(false);
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
        {(error ||
          errorMessage ||
          (successMessage && Object.keys(successMessage).length !== 0)) && (
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={handleClose}
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
                p: 5,
                boxShadow: "lg",
              }}
            >
              <ModalClose variant="plain" sx={{ ml: 2 }} />
              <div>
                <pre>{error || errorMessage || successMessage.message}</pre>
              </div>
            </Sheet>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default Signup;
