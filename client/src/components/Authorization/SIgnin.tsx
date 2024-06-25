import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { validateSignin } from "../../assest/signinvalidator";
import { signInUser } from "../../store/action";

const Signin: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.error);
  const successMessage = useAppSelector((state) => state.auth.user);

  const handleClick = () => {
    navigate("/");
  };

  const handleClickSignup = () => {
    navigate("/signup");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    const formData = { email, password };
    const { error } = validateSignin(formData);
    if (error) {
      setError(error.details.map((d) => d.message).join("\n"));
      setOpen(!open);
    } else {
      dispatch(signInUser(formData));
      setOpen(!open);
      setEmail("");
      setPassword("");
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
              <ModalClose variant="plain" />
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

export default Signin;
