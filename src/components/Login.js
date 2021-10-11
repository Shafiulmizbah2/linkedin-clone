import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const LoginWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            photoURL: userAuth.user.photoURL,
            displayName: userAuth.user.photoURL,
          })
        );
      })
      .catch((e) => alert(e));
  };

  return (
    <LoginWrapper>
      <Paper
        elevation={4}
        component="form"
        sx={{ width: "20rem", minWidth: "14rem", padding: "1rem" }}
        onSubmit={(e) => LoginToApp(e)}
      >
        <img style={{ width: "100%" }} src="/logo.png" alt="logo" />

        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
          Sign in
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Stay updated on your professional world
        </Typography>
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="secondary"
          sx={{ marginBottom: "1rem", marginTop: "2rem" }}
        />
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color="secondary"
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ marginBottom: "1rem" }}
        >
          Sign in
        </Button>
        <Typography variant="body2" color="textSecondary">
          New to linkedin? <Link to="/register">sign up</Link>
        </Typography>
      </Paper>
    </LoginWrapper>
  );
}

export default Login;
