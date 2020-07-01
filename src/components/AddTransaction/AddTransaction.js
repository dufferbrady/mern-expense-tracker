import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [val, setVal] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitTransactionHandle = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      note: text,
      value: +val,
      date: Date().substring(4, 10),
    };

    setText("");
    setVal(0);

    addTransaction(newTransaction);
  };

  return (
    <div className="AddTransaction">
      <div className="AddTransaction-header">Add New Transaction</div>
      <div className="AddTransaction-Top">
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
      </div>
      <form
        onSubmit={submitTransactionHandle}
        className="AddTransaction-Bottom"
      >
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
