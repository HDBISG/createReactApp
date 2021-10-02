import React, { useState } from "react";
import UsePrevious from "./UsePrevious";

const TestUsePrevious = () => {
  const [count, setCount] = useState(0);
  const prevCount = UsePrevious(count);

  return (
    <p>
      <p>
        <b>Now: {count}, before: {prevCount}</b>
      </p>

      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </p>
  );
};

export default TestUsePrevious;
