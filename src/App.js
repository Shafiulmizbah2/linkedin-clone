import React from "react";
import "./App.css";
import { styled } from "@mui/material/styles";

import { initializeApp } from "firebase/app";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/widget";

const firebaseConfig = {
  apiKey: "AIzaSyCsEOvgBIV8pwx3YtuWgxHyOG6TSDn4ftc",
  authDomain: "linkedin-clone-144b3.firebaseapp.com",
  projectId: "linkedin-clone-144b3",
  storageBucket: "linkedin-clone-144b3.appspot.com",
  messagingSenderId: "328057650158",
  appId: "1:328057650158:web:c0af01f1bc69e32f06acff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const AppBody = styled("div")(({ theme }) => ({
  minHeight: "90vh",
  backgroundColor: theme.palette.background.default,
  display: "flex",
}));

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Feed />
        <Widget />
      </AppBody>
    </div>
  );
}

export default App;
