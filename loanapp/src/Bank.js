import React from "react";
import { useRef } from "react";
function Bank() {
  const Bank_name = useRef(null);
  const Branch = useRef(null);
  const ifsccode = useRef(null);
  const account_number = useRef(null);
  const income = useRef(null);
  return (
    <div>
      <form action="">
        <label>Bank Name</label>
        <input type="text" ref={Bank_name} />
        <label>Branch</label>
        <input type="text" ref={Branch} />
        <label>IFSC CODE</label>
        <input type="text" ref={ifsccode} />
        <label>Account Number</label>
        <input type="text" ref={account_number} />
        <label>Yearly income</label>
        <input type="text" ref={income} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Bank;
