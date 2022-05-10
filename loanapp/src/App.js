import React from "react";
import "./App.css";
import { useEffect } from "react";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import Userdata from "./Userdata";
import Document from "./Document";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  
  return (
    <>
      <Router>{!user ? <SignUpScreen /> : <LoginScreen />}</Router>
    </>
  );
}

export default App;
