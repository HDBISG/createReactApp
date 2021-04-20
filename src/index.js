import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import ExampleUseMemo from "./hook/useCallBack1";


function App() {
  return (
    <div>
      <ExampleUseMemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
