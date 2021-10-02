import React, { useRef, useState, useEffect } from "react";


const PreRef = ({ }) => {
  const [count, setCount] = useState(0);
  //const refFromUseRef = React.useRef();
  const preCountUseRef = useRef();

  console.log("outer begin", count);

  useEffect(() => {
    console.log("innter begin", preCountUseRef.current, count);
    preCountUseRef.current = count;
    console.log("innter end", preCountUseRef.current, count);
  });
  console.log("outer end", count);

  return (
    <>
      <p>preCount: {preCountUseRef.current}</p>
      <p>
        <b>You clicked {count}times</b>
      </p>

      <button onClick={() => setCount(count + 1)}>
        Cause re-render
      </button>
    </>
  );
};

export default PreRef;
