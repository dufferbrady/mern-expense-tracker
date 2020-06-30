import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

import "../../App.css";

export default function Breakdown() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.value);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item);

  const expense =
    amounts.filter((amount) => amount < 0).reduce((acc, item) => acc + item) *
    -1;
  return (
    <div className="breakdown">
      <div className="breakdown-blockA">
        <span>Income</span>
        <span style={{ fontSize: "27.5px", color: "#54C22B" }}>
          <strong>{`€${income}`}</strong>
        </span>
      </div>
      <div className="breakdown-blockB">
        <span>Expense</span>
        <span style={{ fontSize: "27.5px", color: "#FF5A52" }}>
          <strong>{`-€${expense}`}</strong>
        </span>
      </div>
    </div>
  );
}
