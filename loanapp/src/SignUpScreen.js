import React from "react";
import { useState, useRef } from "react";
import validator from "validator";
import classes from "./SignUpScreen.module.css";
import axios from 'react'

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
    // const response = await fetch("http://localhost:3001/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     Email: EmailRef.current.value,
    //     Password: PasswordRef.current.value,
    //   }),
    // });
    // const data = await response.json();
    // console.log(data);
    axios.post("http://localhost:3001/register", {
        Email: EmailRef.current.value,
        Password: PasswordRef.current.value,
      })
    .then(res=>console.log(res))

    // console.log(PasswordRef.current.value);

    const res1 = await fetch("http://localhost:3001/getusers", {
      
      headers: { "Content-Type": "application/json" },
    });
    const data1=await res1.json();
    var f=false
    data1.forEach(e => {
      if(e.username===EmailRef.current.value){
        f=true
      }
    });
    if(f){
      e.preventDefault();
      alert("user is already registered")
    }
    else{
      e.preventDefault();
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: EmailRef.current.value,
          password: PasswordRef.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert("user is successfully registered")
    }





  }
  return (
    <div className={classes.center}>
      <div className={classes.Logo}>
        <p>LOGO</p>
      </div>
        <form>
        <div className={classes.txt_field}>
          <label>Username</label>
          <input
            type="text"
            ref={EmailRef}
            placeholder="username"
            onChange={handleEmail}
          />
          </div>
          {messageEmail}
          <br></br>
          <label>password</label>
          <input
            type="password"
            ref={PasswordRef}
            placeholder="username"
            onChange={handlePassword}
          />
          {messagePassword}
          <br></br>
          <button onClick={handleSubmit}>SignUp</button>
        </form>
    </div>
  );
}

export default SignUpScreen;
