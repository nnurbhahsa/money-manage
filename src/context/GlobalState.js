import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component to wrap all other components, which become its children
export const GlobalProvider = ({ children }) => {
  // use dispatch with reducer action
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        // can access anything in initialState object by
        transactions: state.transactions,
        // can access transactions from any component requested from using useContext (another react hook)
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
