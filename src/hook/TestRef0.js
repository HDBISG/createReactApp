import React, { useRef, useEffect, createRef, useState } from 'react';

export default function TestRef3() {

    const inputRef = useRef(null);

    useEffect(() => {
        window.inputRef = inputRef;
    }, []);
    

    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={() => setCount(count+1)}>{count}</button>
        </>
    )
}