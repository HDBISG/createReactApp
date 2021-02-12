import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)
  //const handleDecreaseClick = () => setAge(age - 1)

  let handleDecreaseClick = function() {
    setAge( age - 1);
  }

  return (
      <div> 
          I am {age} Years Old 
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
