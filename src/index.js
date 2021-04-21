import React from "react";
import ReactDOM from "react-dom";

//import ExampleMemo from "./hook/useMemo1";
import UseTitleTest from "./hook2/UseTitleTest";


function App() {
  return (
    <div>
      <UseTitleTest />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
