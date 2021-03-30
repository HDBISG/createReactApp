import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Page1 from './hook/Page1';
import TestColor from './test1/TestColor';
import ZIndex from './test1/ZIndex';


function App() {


  return (
    <div>
      <ZIndex/>
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
