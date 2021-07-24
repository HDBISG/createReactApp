import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import Count from "./f1/Counter";
//import ArrayDepMount from "./f2/TestEffect";
//import ArrayDepMount from "./f2/TestEffect2";
import ArrayDepMount from "./f2/TestEffect3";


function App() {
  return (
    <div>
      <ArrayDepMount />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
