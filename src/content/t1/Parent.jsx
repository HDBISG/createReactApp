import React, { useState } from 'react';
import Child from './Child';
import { MyContext } from '../context-manager';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        })
    });
}

const Parent = (props = {}) => {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);


    return (
        <MyContext.Provider value={{ setStep, setCount, setNumber, fetchData }}>
            <Child step={step} number={number} count={count} />
        </MyContext.Provider>
    );
}

export default Parent;

// http://www.ptbird.cn/react-createContex-useContext.html