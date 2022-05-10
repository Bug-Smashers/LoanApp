import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const Navigate = useNavigate();
  return (
    <div>
      <div>Hello</div>
      <div>
        <button onClick={() => Navigate("/Profile")}>Profile</button>
        <button onClick={() => Navigate("/Request")}>Request</button>
        <button onClick={() => Navigate("/Respond")}>Respond</button>
      </div>
    </div>
  );
}
export default Homepage;
