import React, { useState, useEffect, memo } from "react";

const Child = ({ name, onClick }) => {
  console.log("子组件?");
  return (
    <>
      <div>我是page3 一个子组件，父级传过来的数据：[[{name}]] </div>
      <button onClick={() => onClick("新的子组件name 1 ")}>改变name 1</button>
      <button
        onClick={() =>
          onClick("新的子组件name 2 " + new Date().toLocaleTimeString())
        }
      >
        改变name 2
      </button>
    </>
  );
};
const ChildMemo = memo(Child, childPropsAreEqual);

function childPropsAreEqual(prevChild, nextChild) {
  console.log(
    prevChild.name,
    nextChild.name,
    prevChild.onClick,
    nextChild.onClick
  );

  console.log(
    prevChild.name === nextChild.name,
    prevChild.onClick === nextChild.onClick
  );
  return (
    prevChild.name === nextChild.name && prevChild.onClick === nextChild.onClick
  );
}

const Page3 = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Child组件");

  return (
    <>
      <div>page3 {new Date().toLocaleString()} </div>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        加1
      </button>
      <p>count:{count}</p>
      <Child name={name} onClick={(newName) => setName(newName)} />
      <hr/>
      <ChildMemo name={name} onClick={(newName) => setName(newName)} />
    </>
  );
};

export default Page3;
