import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
    const increment=()=>
    {
        setCount(count+1)
    }
    const decrement=()=>
    {
        setCount(0)
    }
  return (
    <div>
        <h1>
            Count:{count}
        </h1>
        <button onClick={increment}>increment  </button>
        <button onClick={decrement}>reset</button>
    </div>
  )
}
