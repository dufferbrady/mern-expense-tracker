import React, { useContext } from "react";

import { numberWithCommas } from "../../utils/functions";

import { GlobalContext } from "../../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const sign = total >= 0 ? "€" : "-€";
  const color = total >= 0 ? "#54c22b" : "#ff5a52";

  const absTotal = total <= 0 ? total * -1 : total;

  return (
    <>
      <div>Net Balance</div>
      <div style={{ fontSize: "40px", color: `${color}` }}>
        <strong>
          {sign}
          {numberWithCommas(absTotal)}
        </strong>
      </div>
    </>
  );
}
