import React from "react";
import ContextProvider from "./ContextProvider";
import ContextConsumer from "./ContextConsumer";

export const ContextWrapper = ({ children }) => {

    return (
        <ContextProvider>
            <ContextConsumer>
                
            </ContextConsumer>
        </ContextProvider>
    );
};

export default ContextWrapper;
