import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import UseXstateTest from "./hook/UseXstateTest";


function App() {
  return (
    <div>
      <UseXstateTest />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
