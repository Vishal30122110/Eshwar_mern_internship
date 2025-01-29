import React from 'react'
import { User } from './user'

export const Users = ({Theme}) => {
  return (
    <div>
        <h3>Users</h3>
        <User Theme={Theme}/>
    </div>
  )
}
