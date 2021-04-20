import React, { useState, useEffect, memo } from "react";

const Child = (props) => {
    console.log('子组件?')
    return(
        <div>我是page2 一个子组件 {new Date().toLocaleTimeString()}</div>
    );
}
const ChildMemo = memo(Child);

const Page2 = (props) => {
    const [count, setCount] = useState(0);
    console.log('Page2?')
    return (
        <>
            <button onClick={(e) => { setCount(count+1) }}>加1</button>
            <p>count:{count}</p>
            <ChildMemo />
        </>
    )
}

export default Page2;