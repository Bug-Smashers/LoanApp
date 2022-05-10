import React from "react";
import { useRef } from "react";
import { maxloan } from "./Maxloan";
import { useState } from "react";
function RequestLoan() {
  const Amount = useRef(null);
  const Tenure = useRef(null);
  const Interest_rate = useRef(null);
  const score = 400;
  const max_loan = maxloan(score);
  const [message, setmessage] = useState("");
  const handlseSubmit = (e) => {
    if (Amount.current.value > max_loan) {
      e.preventDefault();
      setmessage("Loan Amount Excced");
    }
  };
  return (
    <div>
      <form>
        {message}
        <input type="number" ref={Amount} placeholder="Amount" />
        <input type="number" ref={Tenure} placeholder="Tenure" />
        <input type="number" ref={Interest_rate} placeholder="InterestAmount" />
        <button onClick={handlseSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default RequestLoan;
