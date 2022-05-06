import React from "react";
import { useState } from "react";
import validator from "validator";
import classes from "./SignUpScreen.module.css";

function SignUpScreen() {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [messageEmail, setmessageEmail] = useState("");
  const [messagePassword, setmessagePassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (validator.isEmail(Email)) {
      setmessageEmail("Valid");
    } else {
      setmessageEmail("NOT A VALID EMAIL");
    }
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
    if (password.length < 6) {
      setmessagePassword("password must be at least 6 characters");
    } else {
      setmessagePassword("valid");
    }
  };
  const handleSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
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
          {messageEmail}
          <br></br>
          <label>password</label>
          <input
            type="text"
            value={password}
            placeholder="username"
            onChange={handlePassword}
          />
          {messagePassword}
          <br></br>
          <button onClick={handleSubmit}>SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
