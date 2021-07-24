import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ArrayDepMount = () => {
  const [randomNumber, setRandomNumber] = useState([])
  const [refresh, setRefresh] = useState(0);
  const [effectLogs, setEffectLogs] = useState([])

  useEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },[randomNumber.length]
  )

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          randomNumber[randomNumber.length] = Math.random();
          //setRandomNumber(tmp)
          setRefresh(refresh+1);
        }}
      >
        Generate random number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'🍔'.repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  )
}

export default ArrayDepMount;