import React from "react";

export default function AddTransaction() {
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
        <input placeholder="0" className="addTransaction_input" type="number" />
      </div>
      <button className="Add-button">Add Transaction</button>
    </div>
  );
}
