import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const Signup = ({ handleClose }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const handleSignup = async () => {
    if (password !== cpassword) {
        alert("Please enter your password")
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      handleClose();
    } catch (error) {
        alert(error.message)
      return;
    }
  };
  return (
    <>
  
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <TextField
        type="email"
        id="outlined-basic"
        label="Email Id"
        variant="standard"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={password}
        type="password"
        autoComplete="off"
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={(e) => setpassword(e.target.value)}
        />
      <TextField
        value={cpassword}
        type="password"
        autoComplete="off"
        id="standard-basic"
        label="Confirm Password"
        variant="standard"
        onChange={(e) => setcpassword(e.target.value)}
      />
      <Button
        variant="filled"
        style={{ backgroundColor: "gold" }}
        onClick={handleSignup}
        >
        Sign Up
      </Button>
    </Box>
          </>
  );
};

export default Signup;
