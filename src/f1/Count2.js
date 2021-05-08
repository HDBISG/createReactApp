import React, { useState } from "react";
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  let newState = 0;
  switch (action.type) {
    case "INCREMENT":
      console.log("state 1 : " + state);
      newState = state + 1;
      return newState;
    case "DECREMENT":
      console.log("state 2 : " + state);
      newState = state - 1;
      return newState;
    default:
      console.log("state 3 : " + state);
      return state;
  }
};

const store = createStore(reducer);

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      {console.log("state: " + value)}
      Counter222 value: {value} <br />
      <button onClick={onIncrement}>Increase</button> <br />
      <button onClick={onDecrement}>Decrease</button> <br />
    </div>
  );
};

const CounterWrapp = () => {
  return (
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    ></Counter>
  );
};

export default CounterWrapp;
