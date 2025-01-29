import React from 'react'
import { C2 } from './c2'

export const C1 = () => {
    var msg="hi from c1"
  return (      
    <div>
        <h1>this is component 1
        </h1>           mmmm
        <h1>{msg}</h1>
        <C2 name="c2"/>
    </div>
  )
}
