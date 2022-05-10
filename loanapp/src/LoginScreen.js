import React from "react";
import classes from "./LoginScreen.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const Navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setmessage] = useState("");

  async function handleSubmit(e) {
    console.log(passwordRef.current.value);
    e.preventDefault();
    // Email: usernameRef.current.value,
    //     Password: passwordRef.current.value,
    const res1 = await fetch("http://localhost:3001/getusers", {
      headers: { "Content-Type": "application/json" },
    });
<<<<<<< HEAD
    const data1=await res1.json();
    var f=false
    data1.forEach(e => {
      if(e.username===EmailRef.current.value  && e.password===passwordRef.current.value){
        f=true
=======
    const data1 = await res1.json();
    var f = false,
      f1 = false,
      f2 = false;
    data1.forEach((e) => {
      if (
        e.username === usernameRef.current.value &&
        e.password === passwordRef.current.value
      ) {
        f = true;
      } else if (
        e.username === usernameRef.current.value &&
        e.password !== passwordRef.current.value
      ) {
        f1 = true;
      } else if (e.username !== usernameRef.current.value) {
        f2 = true;
>>>>>>> c2fb272fad2bef0eba9106a5c74fb0d572bfcf91
      }
    });
    if (f) {
      Navigate("/home");
    } else if (f1) {
      setmessage("Password Wrong");
    } else if (f2) {
      setmessage("Not signed up");
    }
  }

  const handlesignup = () => {
    Navigate("/Signup");
  };

  return (
    <body>
      <div className={classes.center}>
        <h1>Login</h1>
        <br />
        {message}
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
            Not a member? <a onClick={handlesignup}>Signup</a>
          </div>
        </form>
      </div>
    </body>
  );
}

export default LoginScreen;
