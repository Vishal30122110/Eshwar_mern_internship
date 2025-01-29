import React, { useState } from 'react'

export const Formtoredux = () => {
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    function name1(e)
    {
        const {name,value}=e.target
        if(name==='name')
        {
            setName(value)
        }
        else if(name==='pass')
        {
            setPass(value)
        }
    }
    console.log(`name:${name}`,`pass:${pass}`)
  return(
    <div>
        <label>name</label>
        <input name="name" type='text' onChange={name1} value={name}></input>
        <label>pass</label>
        <input name="pass" type='password' onChange={name1} value={pass}></input>
        <h1>{name}</h1>
        <h1>{pass}</h1>
    </div>
  )
}
