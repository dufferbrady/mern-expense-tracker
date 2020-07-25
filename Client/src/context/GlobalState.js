import React, { createContext, useReducer } from "react";

import axios from "axios";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  editTransaction: [],
  modal: false,
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const response = await axios.get("/api/v1/transactions");
      console.log(response.data.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      console.log(transaction);
      await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: error,
      });
    }
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function editTransactionHandler(transaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  }

  function showModal(val, id) {
    dispatch({
      type: "SHOW_MODAL",
      payload1: val,
      payload2: id,
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
        editTransaction: state.editTransaction,
        editTransactionHandler,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
