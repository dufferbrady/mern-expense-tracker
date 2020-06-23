import React from "react";

import "../../App.css";

export default function Breakdown() {
  return (
    <div className="breakdown">
      <div className="breakdown-blockA">
        <span>Income</span>
        <span style={{ fontSize: "27.5px" }}>
          <strong>+€0.00</strong>
        </span>
      </div>
      <div className="breakdown-blockB">
        <span>Expense</span>
        <span style={{ fontSize: "27.5px" }}>
          <strong>-€0.00</strong>
        </span>
      </div>
    </div>
  );
}
