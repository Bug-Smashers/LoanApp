import React from "react";
import "./App.css";
<<<<<<< HEAD
// import LoginScreen from "./LoginScreen";
// import SignUpScreen from "./SignUpScreen";
// import Userdata from "./Userdata";
// import Document from "./Document";

// import UserIn from "./UserIn";
import Webcam from "./Webcam";

function App() {
  return (
    <>
      
      <div>
        <Webcam/>
      </div>
=======
import { useEffect } from "react";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import Userdata from "./Userdata";
import Document from "./Document";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
function App() {
<<<<<<< HEAD
  
  user="kalyan"
=======
>>>>>>> c2fb272fad2bef0eba9106a5c74fb0d572bfcf91
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />

          <Route path="/Signup" element={<SignUpScreen />} />

          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
>>>>>>> 623abd53a139ca6a12b45f23da94cae9cd77d028
    </>
  );
}

export default App;
