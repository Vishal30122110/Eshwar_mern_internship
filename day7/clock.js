import React, { useEffect } from 'react'
import { useState } from 'react'

export const Clock = () => {
    const[count,setCount]=useState(0)
    // useEffect(()=>{console.log("the start value is ",count)},[count])
    useEffect(()=>{document.getElementById("name").innerHTML=`value ${count}`},[count])
  return (
    <div>                                                                    
        <h1 id="name">{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}
