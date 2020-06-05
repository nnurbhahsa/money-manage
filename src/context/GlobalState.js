import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component to wrap all other components, which become its children
export const GlobalProvider = ({ children }) => {
  // use dispatch with reducer action
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS that will make calls to reducer for GlobalState
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      // any data we want to send to it
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      // any data we want to send to it
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        // can access anything in initialState object by
        transactions: state.transactions,
        // can access transactions from any component requested from using useContext (another react hook)
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
