import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";


const Login = ({handleClose}) => {

 

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const handleLogin =async () => {
    if(!password || !email){
      alert("please enter data");
   
    } 
    try{
const result = await signInWithEmailAndPassword(auth,email,password);

handleClose();
    }catch(error){
alert(error.message);
return;

    }
  };
  return (
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
        onChange={(e)=>setemail(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <TextField value={password} type="password" autoComplete="off" id="standard-basic" label="Password" variant="standard" onChange={(e)=>setpassword(e.target.value)} />
      <Button
        variant="filled"
        style={{ backgroundColor: "gold" }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
