import React from "react";
import { useState } from "react";

function Profilescreen() {
  const detailsMenu = {
    name: "",
    phno: "",
    email: "",
    aadharno: "",
    panno: "",
    income: "",
  };
  return (
    <div>
      <label>Name</label>
      <h2>detailsMenu[name]</h2>
      <label>phno</label>
      <h2>detailsMenu[phno]</h2>
      <label>email</label>
      <h2>detailsMenu[email]</h2>
      <label>aadharno</label>
      <h2>detailsMenu[aadharno]</h2>
      <label>panno</label>
      <h2>detailsMenu[panno]</h2>
      <label>income</label>
      <h2>detailsMenu[income]</h2>
    </div>
  );
}
export default Profilescreen;
