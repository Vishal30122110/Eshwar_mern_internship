import React from 'react'
import { useSelector } from 'react-redux'

export const Users = () => {
    const users=useSelector((state)=>state.userinfo.users)
    console.log(users)
  return (
    <div>user</div>
  )
}
