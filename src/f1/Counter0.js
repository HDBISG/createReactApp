import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// React component
export default class Counter0 extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    );
  }
}

Counter0.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
};

// Action
const increaseAction = { type: "increase", stepVal: 3 };
const decreaseAction = { type: "decrease", stepVal: -2 };

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + action.stepVal };
    case "decrease":
      return { count: count + action.stepVal };
    default:
      return state;
  }
}

// Store
const store = createStore(counter);
//store.subscribe(render);
