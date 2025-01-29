import React from 'react'
import { C4 } from './c4'

export const C3 = (props) => {
  return (
    <div>
        <h3>This is {props.name}</h3>
        <C4 name="c4"/>
    </div>
  )
}
