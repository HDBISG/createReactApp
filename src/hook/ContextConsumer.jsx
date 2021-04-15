import React, { useContext } from "react";
import { CountContext } from "./ContextProvider";

export const ContextConsumer = ({ children }) => {

    const { count, setCount } = useContext(CountContext);

    return (
        <div>
            <div>Count: ${count}</div>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(count - 1)}>Sub</button>
        </div>
    );
};

export default ContextConsumer;
