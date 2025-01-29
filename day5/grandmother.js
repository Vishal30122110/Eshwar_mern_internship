import React, { useState } from 'react'

export const Grandmother = (props,datafromgrandmother) => {
    const [gm_msg,setgmmsg]=useState("hi i am grandmother");
    const sendmsgtoparent1 =()=>
    {
        props.datafromgrandmother(gm_msg,"hi i am gm")
    }
  return (
    <div>
        <h1>grandmother component</h1>
        <h1>Data from parent:{props.msg}</h1>
        <button onClick={sendmsgtoparent1}>send to parent and child</button>
    </div>
  )
}
