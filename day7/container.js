import React from 'react'
import { Users } from './users'

export const Container = ({Theme}) => {
  return (
    <div>
        <h2>Container component</h2>
        <Users Theme={Theme}/>
    </div>
  )
}
