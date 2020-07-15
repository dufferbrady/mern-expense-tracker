import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../utils/functions";

import "../../App.css";

export default function Transaction({ transaction }) {
  const { showModal } = useContext(GlobalContext);

  const sign = transaction.value > 0 ? "€" : "-€";

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
          {`${sign}${numberWithCommas(Math.abs(transaction.value))}`}
        </div>
        <div className="transactionHistory-icon">
          <FontAwesomeIcon
            onClick={() => showModal(true, transaction.id)}
            icon={faEdit}
          />
        </div>
      </div>
    </>
  );
}
