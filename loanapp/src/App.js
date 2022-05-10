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
import Homepage from "./Homepage.js";
import Profilescreen from "./Profilescreen.js";
import RequestLoan from "./RequestLoan.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />

          <Route path="/Signup" element={<SignUpScreen />} />

          <Route path="/home" element={<Homepage />} />

          <Route path="/Profile" element={<Profilescreen />} />

          <Route path="/Request" element={<RequestLoan />} />

          {/* <Route path="/Respond" element={<Respond />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
