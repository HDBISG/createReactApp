import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const age = useState(19); // age is Array
  const handleClick = () => age[1](age[0] + 1)
  //const handleDecreaseClick = () => setAge(age - 1)

  let handleDecreaseClick = function() {
    age[1]( age[0] - 1);
  }

  return (
      <div> 
          I am {age[0]} Years Old 
        <div> 
        <button onClick={handleClick}>Increase my age! </button>
        <button onClick={handleDecreaseClick}>Decrease my age! </button>
      </div>
   </div> )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)
