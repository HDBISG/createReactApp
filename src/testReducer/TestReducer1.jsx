import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
};

const TestReducer1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            {count}
            <button onClick={() => dispatch('increment')}>+1</button>
            <button onClick={() => dispatch('decrement')}>-1</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    );
};

export default TestReducer1;

// https://juejin.cn/post/6844903817981460493
