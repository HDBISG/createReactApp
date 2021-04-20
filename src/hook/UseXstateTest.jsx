import React from 'react';
import useXState from "./useXState";

function UseXstateTest() {

    const [state, setState] = useXState(1);

    const afterUpdateStatus = (status) => {
        console.log( "status", status);
    }

    const handleClick = (e) => {
        let newState = state + 1;
        setState( newState, afterUpdateStatus(newState) );
    }


    return (
        <div>
            state:{state}<br></br>
            <button onClick={(e)=> handleClick(e)}> button </button>
        </div>
    );
}

export default UseXstateTest;