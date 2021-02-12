import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Page1 from './hook/Page1';
import Page2 from './hook/Page2';
import TestRef from './hook/TestRef';


function App() {


  return (
    <div>
      <TestRef/>
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
