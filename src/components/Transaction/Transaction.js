import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

export default function Transaction({ transaction }) {
  const sign = transaction.value > 0 ? "+" : "-";
  return (
    <>
      <div className="transactionHistory-listItemA">{transaction.date}</div>
      <div className="transactionHistory-listItemB">{transaction.note}</div>
      <div className="transactionHistory-listItemC">
        <div
          className={
            transaction.value > 0
              ? "transactionHistory-value-income"
              : "transactionHistory-value-expense"
          }
        >
          {`€${sign}${Math.abs(transaction.value)}`}
        </div>
        <div className="transactionHistory-icon">
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </div>
    </>
  );
}
