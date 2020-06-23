import React, { useState } from "react";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [val, setVal] = useState(0);
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
      <div className="AddTransaction-Bottom">
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
      </div>
      <button className="Add-button">Add Transaction</button>
    </div>
  );
}
