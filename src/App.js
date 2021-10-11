import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/widget";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import { auth } from "./firebase";

const AppBody = styled("div")(({ theme }) => ({
  height: "90vh",
  backgroundColor: theme.palette.background.default,
  display: "flex",
}));

function App({ history }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
          </>
        ) : (
          <Route path="/" exact>
            <Header />
            <AppBody>
              <Sidebar />
              <Feed />
              <Widget />
            </AppBody>
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
