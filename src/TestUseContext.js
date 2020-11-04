import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const initialState = {
    inputText: '',
};

function Input_one() {
    const {state, setState} = useContext(AppContext);
    return (
        <input value={state.inputText} onChange={e => setState({inputText:e.target.value})}/>
    )
}

function Input_two() {
    const {state, setState} = useContext(AppContext);
    return (
        <input value={state.inputText} onChange={e => setState({inputText:e.target.value})}/>
    )
}

function TestUseContext() {
    const [state,setState] = useState(initialState);
    return (
        <React.Fragment>
            <AppContext.Provider value={{state, setState}}>
                <Input_one/>
                <Input_two/>
            </AppContext.Provider>
        </React.Fragment>
    );
}

export default TestUseContext;