import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers} from '../slices/userslice';


export const Newform = () => {
    const dispatch = useDispatch();
    const [numbers, setnums] = useState({
        num1: "",
        num2: ""
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setnums(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
var add1;
    const add = (e) => {
        e.preventDefault();
        add1=parseInt(numbers.num1)+parseInt(numbers.num2)
        dispatch(addUsers(add1));
    };
var mul1;
    const mul = (e) => {
        mul1=parseInt(numbers.num1)*parseInt(numbers.num2)
        e.preventDefault();
        dispatch(addUsers(mul1)); 
    };

    return (
        <div>
            <form>
                <label>Number 1: </label>
                <input
                    type="number"
                    value={numbers.num1}
                    name="num1"
                    onChange={handlechange}
                />
                <label>Number 2: </label>
                <input
                    type="number"
                    value={numbers.num2}
                    name="num2"
                    onChange={handlechange}
                />
            </form>
            <button onClick={add}>Add</button>
            <button onClick={mul}>Multiply</button>
        </div>
    );
};
