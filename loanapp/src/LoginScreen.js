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
    <div className={classes.Main}>
      <div className={classes.Logo}>
        <p>LOGO</p>
      </div>
      <div className={classes.box}>
        <form>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={handleUsername}
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
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
