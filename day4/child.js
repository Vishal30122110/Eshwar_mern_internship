import React from 'react'

export const Child = (props) => {

  return (
    <div>
        <h1>this is child component</h1>
        <p>
            {props.msg}
        </p>
    </div>
  ) ;
}
