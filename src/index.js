import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Page1 from "./hook/Page1";
import TestUseInterval from "./hook/TestUseInterval";
import ContextWrapper from "./hook/ContextWrapper";
import TestColor from "./test1/TestColor";
import Counter0 from "./f1/Counter0";

function App() {
  return (
    <div>
      <ContextWrapper />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
