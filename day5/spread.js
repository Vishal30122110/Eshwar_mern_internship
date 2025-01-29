import React, { useState } from 'react'

export const Spread = () => {
    // const a1=[1,2,3]
    // const a2=[4,5,6]
    // const a3=[7,8,9]
    // const comb=[...a1,...a2,...a3]
    const [message,setmessage]=useState("click the button")
const handleclick=()=>{
    setmessage('hello,you clicked the button')
}
const handleclick2=()=>
{
    setmessage("you clicked the second button")
}
return(
<div>
<h1>{message}</h1>
<button onClick={handleclick}>click</button>
<button onClick={handleclick2}>click</button>
</div>
)
}
