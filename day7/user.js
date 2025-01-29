import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../App'
export const User = ({Theme}) => {
    const contextValue = useContext(themeContext)
    console.log(contextValue.Theme)
  return (
    <div style={contextValue.style}><h1>User</h1>
    <h1>{contextValue.theme
        }</h1>
    </div>

  )
}
