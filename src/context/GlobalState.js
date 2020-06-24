import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
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
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
