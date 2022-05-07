import React from "react";
import { useRef, useState } from "react";

function Userdata() {
  const [Aadhar, setAadhar] = useState([]);
  const [Pan, setPan] = useState([]);
  const [SalarySlips, setSalarySlips] = useState([]);

  return (
    <div className="App">
      <form>
        <input
          type="file"
          value={Aadhar}
          onChange={(e) => setAadhar(e.target.files[0])}
        />

        <input
          type="file"
          value={Pan}
          onChange={(e) => setPan(e.target.files[0])}
        />

        <input
          type="file"
          value={SalarySlips}
          onChange={(e) => setSalarySlips(e.target.files[0])}
        />
      </form>
    </div>
  );
}

export default Userdata;
