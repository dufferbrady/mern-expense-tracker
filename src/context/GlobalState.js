import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    {
      id: Math.floor(Math.random() * 100000000),
      note: "cash",
      value: -800,
      date: Date().substring(4, 10),
    },
    {
      id: Math.floor(Math.random() * 100000000),
      note: "rent",
      value: -75,
      date: Date().substring(4, 10),
    },
    {
      id: Math.floor(Math.random() * 100000000),
      note: "wages",
      value: 2000.5,
      date: Date().substring(4, 10),
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
