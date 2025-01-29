import React from 'react'
import { C3 } from './c3'

export const C2 = (props) => {
  return (
    <div>
        <h2>This is {props.name}</h2>
        <C3 name="c3"/>
    </div>
  )
}
