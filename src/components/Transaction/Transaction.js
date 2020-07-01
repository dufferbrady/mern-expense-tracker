import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.value > 0 ? "€" : "-€";

  // function deleteTransaction(id) {
  //   console.log(id);
  // }

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
          {`${sign}${Math.abs(transaction.value)}`}
        </div>
        <div className="transactionHistory-icon">
          <FontAwesomeIcon
            onClick={() => deleteTransaction(transaction.id)}
            icon={faEdit}
          />
        </div>
      </div>
    </>
  );
}
