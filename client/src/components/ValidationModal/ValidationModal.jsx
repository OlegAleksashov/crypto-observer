import React, { useState } from "react";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/joy/Modal";
import { useDispatch, useSelector } from "react-redux";

const ValidationModal = ({ error }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /*const handleSignup = () => {
    const payload = { name, email, password, confirmPassword };
    const { error } = validateSignup(payload);
    if (error) {
      setError(error.details.map((d) => d.message).join(", "));
    } else {
      setError(null);
    }
  };*/

  return (
    <Modal>
      <ModalClose
        variant="plain"
        sx={{ m: 1 }}
        //onClick={handleCloseErrorMessage}
      />
      <Typography variant="body2" color="error">
        {error}
      </Typography>
    </Modal>
  );
};

export default ValidationModal;
