import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

const initialState = [
  {
    note: "cash",
    value: "€-800",
    date: Date().substring(4, 10),
  },
  {
    note: "rent",
    value: "€-75",
    date: Date().substring(4, 10),
  },
  {
    note: "wages",
    value: "€2000",
    date: Date().substring(4, 10),
  },
];

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState(initialState);
  return (
    <div className="transactionHistory">
      <div className="transactionHistory-header">Recent Transactions</div>
      <ul className="transactionHistory-list">
        {transactions.map((transaction, i) => (
          <li
            key={`${transaction.note}${i}`}
            className="transactionHistory-listItem"
          >
            <div className="transactionHistory-listItemA">
              {transaction.date}
            </div>
            <div className="transactionHistory-listItemB">
              {transaction.note}
            </div>
            <div className="transactionHistory-listItemC">
              <div className="transactionHistory-value">
                {transaction.value}
              </div>
              <div className="transactionHistory-icon">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
