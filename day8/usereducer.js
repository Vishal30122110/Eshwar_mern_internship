import React,{useEffect,useReducer} from 'react'
const ACTIONS=
{
    INCREMENT:"increment",
    DECREMENT:"decrement",
    RESET:"reset"
}
function reducerfunction(state,action)
{
    switch(action.type)
    {
        case ACTIONS.INCREMENT:
            return {count: state.count+1}
        case ACTIONS.DECREMENT:
            return {count: state.count-1}
        case ACTIONS.RESET:
            return {count: 0}
    }
}
export const Usereducer = () => {
    const [state,dispatch]=useReducer(reducerfunction,{count:55})
    function increment()
    {
        dispatch({type:"increment"})
    }
    function decrement()
    {
        dispatch({type:"decrement"})
    }
    function reset()
    {
        dispatch({type:"reset"})
    }
    console.log(state)

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
