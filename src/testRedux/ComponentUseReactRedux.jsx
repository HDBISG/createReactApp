import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = { num: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return { ...state, num: state.num - 1 };
        case "increment":
            return { ...state, num: state.num + 1 };
        default:

            return state;
    }
};

const store = createStore(reducer, initialState);


const ComponentUseReactRedux = () => {
    const [renderPage, setRenderPage] = useState(0);
    console.log(store);
    return (
        <div>
            <h2>ComponentUseReactRedux</h2>
            <Provider store={store}>
                <ChildComponentUseReactRedux />
            </Provider>
            <button onClick={() => setRenderPage(renderPage + 1)}>Refresh</button>
        </div>
    )
}

const ChildComponentUseReactRedux = () => {
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();

    console.log("ChildComponentUseReactRedux", num, "end");

    return (
        <div>
            <h3>Using useSelector, useDispatch</h3>
            Number: {num}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
};

export default ComponentUseReactRedux;
