import React, { useState, useCallback } from 'react'

const functionsCounter = new Set()

const Counter = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)
  
    const increment = () => {
      console.log("increment", count);
      setCount(count + 1)
    }
    const decrement = () => {
      console.log("decrement", count);
      setCount(count - 1)
    }
    const incrementOtherCounter = () => {
      console.log("incrementOtherCounter", otherCounter);
      setOtherCounter(otherCounter + 1)
    }
  

  //const increment = useCallback(() => { setCount(count + 1) }, [count]);



  return (
    <>
      Count: {count}
      <br />
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}

export default Counter;