import React from "react";
import classes from "./LoginScreen.module.css";
import { useRef } from "react";

function LoginScreen() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    console.log(passwordRef.current.value);
    e.preventDefault();
    // Email: usernameRef.current.value,
    //     Password: passwordRef.current.value,
    const res1 = await fetch("http://localhost:3001/getusers", {
      
      headers: { "Content-Type": "application/json" },
    });
    const data1=await res1.json();
    var f=false
    data1.forEach(e => {
      if(e.username==EmailRef.current.value  && e.password==passwordRef.current.value){
        f=true
      }
    });
    if(f){
      e.preventDefault();
      alert("user is already registered")
    }
  }

  return (
    <body>
      <div className={classes.center}>
        <h1>Login</h1>
        <br />
        <form>
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
        </form>
      </div>
    </body>
  );
}

export default LoginScreen;
