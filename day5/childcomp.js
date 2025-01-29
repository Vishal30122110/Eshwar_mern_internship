import React, { useState } from 'react';
import { Grandmother } from './grandmother';
export const Childcomp = (props,datafromchild) => {
    const[child_msg,setchildmsg]=useState("hello from child")
    const[grandmamsg,setgrandmamsg]=useState('__')
    const onchange3=(message3,message4)=>
        {
            setgrandmamsg(message3)
            props.datafromchild(child_msg,message4)

        }
    const sendmsgtoparent=()=>
    {
        props.datafromchild(child_msg)
    }
        

  return (
    <div>
        <h1>Child component</h1>
        <h2>Data from parent :{props.msg}</h2>
        <h2>Data from grandmother :{grandmamsg}</h2>
        <button onClick={sendmsgtoparent}>send to parent </button>
        <Grandmother msg={grandmamsg} datafromgrandmother={onchange3}/>
        {/* <button onClick={sendmsgtoparent}>send to parent </button> */}
    </div>
  )
}

