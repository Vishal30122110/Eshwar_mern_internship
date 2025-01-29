import React from 'react'
import { Child } from './child'

export const Parent = () => {
  const msg= "hello from parent"
    return (
    <div>
        <h1>this is parent component</h1>
        <Child msg={msg}/>
    </div>
  );
}
