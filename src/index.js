import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DropdownList from './DropdownList';


function App() {


  return (
    <div>
      <DropdownList></DropdownList>
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
