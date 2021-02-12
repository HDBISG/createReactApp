import React, { useState, useEffect } from "react";

const Child = (props) => {
    console.log('子组件?')
    return(
        <div>我是一个子组件</div>
    );
}

const Page1 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <Child />
        </>
    )
}

export default Page1;