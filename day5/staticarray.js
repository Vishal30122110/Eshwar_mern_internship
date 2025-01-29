import React, { useState } from 'react';

export const Static = () => {
  const [arr1] = useState([1, 4, 5]); 
  const [arr2] = useState([2, 3, 6]);
  const [arr3, setArr3] = useState([...arr1, ...arr2]); 
  const sortarr = () => {
    const sortedArray = [...arr3].sort((a, b) => a - b); 
    setArr3(sortedArray); 
  }
  return (
    <div>
      arr1 = {(arr1)}
      <br />
      arr2 = {(arr2)}
      <br />
      Sorted arr3 = {(arr3)}
      <br />
      <button onClick={sortarr}>Sort</button>
    </div>
  );
};
/*const app2=()=>
{
var arr1= [1,4,6]
var arr2={2,3,5}
const combineaarr=()=>
  {
  document.getElementById("res").innerHTML=arr1.concat(arr2)
  }  
  return 
  (
  <div>
  <h1>array1 elements:{arr1.join(",")}</h1>
  <h1> array2 elements:{arr2.join(",")}</h1>
  <h1 id="res"></h1>
  <button onClick={combinearr}>Combine</button> 
  </div>  )
}*/