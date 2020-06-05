import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  // form needs component level state b/c of its inputs => HOOK
  //   1) create piece of state
  //   2) create funciton to manipulate that piece of state
  //   3) i.e. default goes in useState('')
  //   4) connect to inputs
  //   5) input needs value and
  //   6) onChange event b/c when it is changed, it needs to update that piece of state
  //       call a function, then call i.e. setText and pass in what we want to set it to, which is what we are typing
  //         => event parameter

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
