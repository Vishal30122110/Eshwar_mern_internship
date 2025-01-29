import react,{useState} from "react";
import React from 'react'

export const Dynamicarray = () => {
    const one=[1,3,5]
    const two=[2,4,6]
    const[final,setfinal]=useState([])
    const handleSort = () => {
        const sortedArray = [...one, ...two].sort((a, b) => a - b);
        setfinal(sortedArray);
      };

  return (
    <div>
        <h1>ONE : [{one.join(",")}]</h1>
        <h1>TWO : [{two.join(",")}]</h1>
        <h2>final: [{final.join(",")}]</h2>
        <button onClick={handleSort}>sort</button>
    </div>
  )
}
