import React from "react";
import { useState, useRef } from "react";
import validator from "validator";
import classes from "./SignUpScreen.module.css";

function SignUpScreen() {
  // const [Email, setEmail] = useState("");
  // const [password, setpassword] = useState("");
  const [messageEmail, setmessageEmail] = useState("");
  const [messagePassword, setmessagePassword] = useState("");

  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);

  const handleEmail = (e) => {
    if (validator.isEmail(EmailRef.current.value)) {
      setmessageEmail("Valid");
    } else {
      setmessageEmail("NOT A VALID EMAIL");
    }
  };
  const handlePassword = (e) => {
    if (PasswordRef.current.value.length < 6) {
      setmessagePassword("password must be at least 6 characters");
    } else {
      setmessagePassword("valid");
    }
  };
  async function handleSubmit(e) {
    console.log(PasswordRef.current.value);
    e.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: EmailRef.current.value,
        Password: PasswordRef.current.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
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
            ref={EmailRef}
            placeholder="username"
            onChange={handleEmail}
          />
          {messageEmail}
          <br></br>
          <label>password</label>
          <input
            type="text"
            ref={PasswordRef}
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
