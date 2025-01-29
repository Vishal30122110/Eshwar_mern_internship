import React from 'react'
import { useReducer } from 'react';
const Actions=
    {
        V:"violet",
        I:"blue",
        G:"green",
        Y:"yellow",
        O:"orange",
        R:"red"
    }
    function reducerfunction(state, action) {
        switch (action.type) {
            case "V":
                return { color: Actions.V };
            case "I":
                return { color: Actions.I };
            case "G":
                return { color: Actions.G };
            case "Y":
                return { color: Actions.Y };
            case "O":
                return { color: Actions.O };
            case "R":
                return { color: Actions.R };
            default:
                return state; 
        }
    }

export const Rainbow = () => {
    const [state, dispatch] = useReducer(reducerfunction, { color: "white" });
    const handleUserInput = () => {
        const userInput = prompt(
            "Enter a color initial (V for Violet, I for Indigo, G for Green, Y for Yellow, O for Orange, R for Red):"
        ).toUpperCase();
            dispatch({type:userInput})
    }
    return (
        <div>
        <h1 style={{ color: state.color }}>Current Color: {state.color}</h1>
        <button onClick={handleUserInput}>Change Color</button>
    </div>
  )
}