import React from "react";
import { useState } from "react";
import classes from "./SignUpScreen.module.css";

function SignUpScreen() {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("hi");
  };
  return (
    <div className={classes.Main}>
      <div className={classes.Logo}>
        <p>LOGO</p>
      </div>
      <div className={classes.box}>
        <form>
          <label>Username</label>
          <input
            type="text"
            value={Email}
            placeholder="username"
            onChange={handleEmail}
          />
          <br></br>
          <label>password</label>
          <input
            type="text"
            value={password}
            placeholder="username"
            onChange={handlePassword}
          />
          <br></br>
          <button onClick={handleSubmit}>SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
