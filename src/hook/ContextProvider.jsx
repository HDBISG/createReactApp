import React, { createContext, useState, useReducer } from "react";

export const CountContext = createContext({ });

export const ContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider
            value={{
                count,
                setCount
            }}
        >
            {children}
        </CountContext.Provider>
    );
};

export default ContextProvider;
