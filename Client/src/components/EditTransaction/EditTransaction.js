import React, { useState, useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";

export default function EditTransaction() {
  const { editTransaction, editTransactionHandler, showModal } = useContext(
    GlobalContext
  );

  const note = editTransaction.map((transaction) => transaction.note);
  const amount = editTransaction.map((transaction) => transaction.value);
  const id = editTransaction.map((transaction) => transaction.id);
  const date = editTransaction.map((transaction) => transaction.date);

  const [text, setText] = useState("");
  const [val, setVal] = useState(0);

  useEffect(() => {
    setText(note);
    setVal(amount);
    // eslint-disable-next-line
  }, [editTransaction]);

  const submitTransactionHandle = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: id[0],
      note: text,
      value: +val,
      date: date[0],
    };

    setText("");
    setVal(0);

    editTransactionHandler(newTransaction);
  };

  return (
    <>
      <div className="AddTransaction-header">Edit Transaction</div>
      <div>
        <form
          onSubmit={submitTransactionHandle}
          className="AddTransaction-Bottom"
        >
          <div className="AddTransaction-Top">
            <span style={{ fontSize: "15px" }}>
              <strong>Note</strong>
            </span>
            <input
              //placeholder={note}
              //defaultValue={note}
              className="addTransaction_input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <strong style={{ fontSize: "15px" }}>Value</strong>
            <span style={{ fontSize: "12.5px", marginTop: "2.5px" }}>
              Enter "-" for expense, "+" for income
            </span>
          </span>
          <input
            //placeholder={amount}
            className="addTransaction_input"
            type="number"
            //defaultValue={amount}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="Add-button">Add Transaction</button>
        </form>
        <button onClick={() => showModal(false)} className="Add-button">
          Cancel
        </button>
      </div>
    </>
  );
}
