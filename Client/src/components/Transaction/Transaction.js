import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../utils/functions";

import "../../App.css";

export default function Transaction({ transaction }) {
  const { showModal } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "€" : "-€";

  return (
    <>
      <div className="transactionHistory-listItemA">{transaction.date}</div>
      <div className="transactionHistory-listItemB">{transaction.text}</div>
      <div className="transactionHistory-listItemC">
        <div
          className={
            transaction.amount > 0
              ? "transactionHistory-value-income"
              : "transactionHistory-value-expense"
          }
        >
          {`${sign}${numberWithCommas(Math.abs(transaction.amount))}`}
        </div>
        <div className="transactionHistory-icon">
          <FontAwesomeIcon
            onClick={() => showModal(true, transaction._id)}
            icon={faEdit}
          />
        </div>
      </div>
    </>
  );
}
