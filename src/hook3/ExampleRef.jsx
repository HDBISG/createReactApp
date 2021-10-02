import React, { useRef } from "react"
//  http://ourjs.com/wiki/view/react-hooks/useRef
export default function ExampleRef() {
  let input = useRef()
  let setInputValue = function() {

    console.dir(input.current);
    console.log("Before",input.current);

    input.current.value = "OurJS:" + Date.now()
    input.current.name = "OurJS name:" + Date.now()
    input.current.extAttr = "OurJS name:" + Date.now()

    console.dir(input.current);
    console.log("End",input.current);
  }
  console.dir(input.current);
  console.log("Outer",input.current);

  return (
    <div>
      <hr/><h1>useRef</h1>
      <input type="text" ref={input}/>
      <button onClick={setInputValue}>Set Value:useRef</button>
    </div>
  )
}