import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  modal: false,
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

  function showModal(val) {
    dispatch({
      type: "SHOW_MODAL",
      payload: val,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        modal: state.modal,
        showModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
