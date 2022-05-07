import React from "react";
import classes from "./LoginScreen.module.css";
import { useRef, useState } from "react";

function LoginScreen() {
  // const [username, setUsername] = useState("");
  // const [password, setpassword] = useState("");
  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setpassword(e.target.value);
  // };
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
  };
  return (
    <body>
      <div className={classes.center}>
        <h1>Login</h1>
        <br />
        <form>
<<<<<<< HEAD
          <div className={classes.txt_field}>
            <label>Email or Username</label>
            <br />
            <input
              type="text"
              ref={usernameRef}
              placeholder="Email or Username"
            />
          </div>
          <div className={classes.txt_field}>
            <label>Password</label>
            <br />
            <input type="text" ref={passwordRef} placeholder="Password" />
          </div>
          <br />
          <div className={classes.pass}>
            <a href="#">Forgot Password?</a>
          </div>
          <br />
          <input type="submit" value="Login" onClick={handleSubmit} />

          <div className={classes.signup_link}>
            Not a member? <a href="#">Signup</a>
          </div>
=======
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
>>>>>>> 207a22945803ea9c7b8210281ea55ad830f1dd67
        </form>
      </div>
    </body>
  );
}

export default LoginScreen;
