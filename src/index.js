import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import Count from "./f1/Counter";
//import ArrayDepMount from "./f2/TestEffect";
//import ArrayDepMount from "./f2/TestEffect2";
import ArrayDepMount from "./f2/TestEffect3";
import UseXstateTest from "./hook/UseXstateTest";
import TestRef2 from "./hook/TestRef2";
import ExampleMemo from "./hook/useMemo1";
import TestUsePrevious from "./usePrevious/TestUsePrevious";
import TestUsePreviousWrap from "./usePrevious/TestUsePreviousWrap";

import Parent from "./content/t1/Parent";

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
