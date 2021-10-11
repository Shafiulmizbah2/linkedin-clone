import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const LoginWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const RegisterToApp = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                photoURL: profile,
                displayName: name,
              })
            );
            history.push("/");
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <LoginWrapper>
      <Paper
        elevation={4}
        component="form"
        sx={{ width: "30%", minWidth: "14rem", padding: "1rem" }}
        onSubmit={(e) => RegisterToApp(e)}
      >
        <img style={{ width: "100%" }} src="/logo.png" alt="logo" />

        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
          Sign up
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Stay updated on your professional world
        </Typography>
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          color="secondary"
          sx={{ marginBottom: "1rem", marginTop: "2rem" }}
        />
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Photo url"
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          color="secondary"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          id="outlined-password-input"
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="secondary"
          sx={{ marginBottom: "1rem" }}
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
          Sign up
        </Button>
        <Typography variant="body2" color="textSecondary">
          Already a member? <Link to="/">Sign in</Link>
        </Typography>
      </Paper>
    </LoginWrapper>
  );
}

export default Register;
