import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const[time,setTime]=useState(0)
    useEffect(()=>
    {
           
        const interval=setInterval(()=>
        {
            console.log("hello");
            setTime(time=>time+1)
        },1000)
        
        
        // return ()=>clearInterval(interval)
    },[])
  return (
    <div>
        <h1>TIMER</h1>
        <h2>{time} : seconds have passes</h2>
    </div>
  )
}
