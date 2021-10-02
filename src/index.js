import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import Count from "./f1/Counter";
//import ArrayDepMount from "./f2/TestEffect";
//import ArrayDepMount from "./f2/TestEffect2";
import ArrayDepMount from "./f2/TestEffect3";
import ExampleRef from "./hook3/ExampleRef";
import UseCreateRef from "./hook3/UseCreateRef";
import ExampleMemo from "./hook/useMemo1";
import TestUsePrevious from "./usePrevious/TestUsePrevious";

function App() {
  return (
    <div>
      <ExampleMemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
