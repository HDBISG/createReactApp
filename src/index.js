import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import UseDebounceTest from "./hook2/UseDebounceTest";


function App() {
  return (
    <div>
      <UseDebounceTest />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
