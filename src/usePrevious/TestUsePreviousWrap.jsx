import React, { useState } from "react";
import TestUsePrevious from "./TestUsePrevious";


const TmpComponent = () => {
  return (
    <div>
      This is TmpComponent;
    </div>
  )
}

const TestUsePreviousWrap = () => {
  const [on, setOn] = useState(true);

  return (
    <p>
      <p>
        {on&&<TestUsePrevious/>}
      </p>
      <p>
        {(!on)&&<TmpComponent/>}
      </p>

      <button onClick={() => setOn( on => setOn(!on))}> on/off </button> 
    </p>
  );
};

export default TestUsePreviousWrap;
