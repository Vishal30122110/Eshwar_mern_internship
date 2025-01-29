import React from 'react'
import { C5 } from './c5'

export const C4 = (props) => {
  return (
    <div>
        <h4>This is {props.name}</h4>
        <C5 name="c5"/>
    </div>
  )
}
