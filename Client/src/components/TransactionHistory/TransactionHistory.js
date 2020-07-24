import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Transaction from "../Transaction/Transaction";

import "../../App.css";

export default function TransactionHistory() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  console.log(transactions);
  return (
    <div className="transactionHistory">
      <div className="transactionHistory-header">Recent Transactions</div>
      <ul className="transactionHistory-list">
        {transactions.map((transaction) => (
          <div key={transaction._id} className="list">
            <li className="transactionHistory-listItem">
              <Transaction transaction={transaction} />
            </li>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-transaction"
            >
              x
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
