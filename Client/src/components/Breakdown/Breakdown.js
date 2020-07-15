import React, { useContext } from "react";

import { numberWithCommas } from "../../utils/functions";

import { GlobalContext } from "../../context/GlobalState";

import "../../App.css";

export default function Breakdown() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.value);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="breakdown">
      <div className="breakdown-blockA">
        <span>Income</span>
        <span style={{ fontSize: "27.5px", color: "#54C22B" }}>
          <strong>{`€${numberWithCommas(income)}`}</strong>
        </span>
      </div>
      <div className="breakdown-blockB">
        <span>Expense</span>
        <span style={{ fontSize: "27.5px", color: "#FF5A52" }}>
          <strong>{`€${numberWithCommas(expense)}`}</strong>
        </span>
      </div>
    </div>
  );
}
