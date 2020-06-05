import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  // can pull out anything from GlobalContext using useContext hooks
  // const context = useContext(GlobalContext);
  // destructuring
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {/* <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li> */}
        {/* vs.  */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
