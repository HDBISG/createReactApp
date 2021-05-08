import React, { useState } from "react";
import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  let newState = {};
  switch (action.type) {
    case "INCREASE": {
      console.log("state 1 : " + state.count);
      newState = { count: state.count + 2, abc: 0 };
      return newState;
    }
    case "DECREASE": {
      console.log("state 2 : " + state.count);
      newState = { count: state.count - 2, def: 0 };
      return newState;
    }
    default: {
      console.log("state 3 : " + state);
      return { ...state };
    }
  }
};

const store = createStore(reducer);

let unsubscribe = store.subscribe(() =>
  console.log(`subscribe: ${store.getState().count}`)
);

const Counter = () => {
  const [refresh, setRefresh] = useState("");

  return (
    <div>
      {console.log("state: " + store.getState().count)}
      Count1 value: {store.getState().count} <br />
      <button
        onClick={() => {
          store.dispatch({ type: "INCREASE" });
          //setRefresh(new Date().toISOString());
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          store.dispatch({ type: "DECREASE" });
          //setRefresh(new Date().toISOString());
        }}
      >
        Decrease
      </button>{" "}
      <br />
    </div>
  );
};

export default Counter;
