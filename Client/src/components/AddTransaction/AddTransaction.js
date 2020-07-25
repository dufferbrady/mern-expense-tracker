import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [val, setVal] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitTransactionHandle = (e) => {
    e.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = new Date(yyyy, mm - 1, dd);
    today = today.toDateString().substring(4, 10);

    const newTransaction = {
      text: text,
      amount: +val,
      date: today,
    };

    setText("");
    setVal(0);

    addTransaction(newTransaction);
  };

  return (
    <div className="AddTransaction">
      <div className="AddTransaction-header">Add New Transaction</div>
      <form
        onSubmit={submitTransactionHandle}
        className="AddTransaction-Bottom"
      >
        <span style={{ fontSize: "15px" }}>
          <strong>Note</strong>
        </span>
        <input
          placeholder="Details of transaction..."
          className="addTransaction_input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <strong style={{ fontSize: "15px" }}>Value</strong>
          <span style={{ fontSize: "12.5px", marginTop: "2.5px" }}>
            Enter "-" for expense, "+" for income
          </span>
        </span>
        <input
          placeholder="0"
          className="addTransaction_input"
          type="number"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="Add-button">Add Transaction</button>
      </form>
    </div>
  );
}
