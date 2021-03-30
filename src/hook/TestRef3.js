import React, { useRef, useEffect, createRef, useState } from 'react';

export default function TestRef3() {
    let [count, setCount] = useState(0);

    const myRef = createRef(null);
    const inputRef = useRef(null);
    //仅执行一次
    useEffect(() => {
        inputRef.current.focus();
        window.myRef = myRef;
        window.inputRef = inputRef;
    }, []);
    
    useEffect(() => {
        //除了第一次为true， 其它每次都是 false 【createRef】
        console.log('myRef === window.myRef', myRef === window.myRef);
        //始终为true 【useRef】
        console.log('inputRef === window.inputRef', inputRef === window.inputRef);
    })
    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={() => setCount(count+1)}>{count}</button>
        </>
    )
}