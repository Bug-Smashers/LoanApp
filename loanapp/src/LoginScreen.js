import React from "react";
import classes from "./LoginScreen.module.css";
import { useRef, useState } from "react";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  return (
    <body>
    <div className={classes.center}>
      <h1>Login</h1><br />
        <form>
        <div className={classes.txt_field}>
        <label>Email or Username</label>
        <br />
        <input
            type="text"
            value={username}
            placeholder="Email or Username"
            onChange={handleUsername}
          />
        </div>
        <div className={classes.txt_field}>
        <label>Password</label>
        <br />
        <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        
        <div className={classes.pass}>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="submit" value="Login"/>
        <div className={classes.signup_link}>
          Not a member? <a href="#">Signup</a>
        </div>
        </form>
      </div>
    </body>
  );
}

export default LoginScreen;
