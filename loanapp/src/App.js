import React from "react";
import "./App.css";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

function App() {
  return (
    <>
      {" "}
      <div>
        <LoginScreen />
      </div>
      <div>
        <SignUpScreen />
      </div>
    </>
  );
}

export default App;
