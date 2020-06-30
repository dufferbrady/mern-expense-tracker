import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.value);

  const total = amounts.reduce((acc, item) => acc + item);

  const sign = total > 0 ? "€" : "-€";
  const color = total > 0 ? "#54c22b" : "#ff5a52";

  return (
    <>
      <div>Net Balance</div>
      <div style={{ fontSize: "40px", color: `${color}` }}>
        <strong>
          {sign}
          {total}
        </strong>
      </div>
    </>
  );
}
