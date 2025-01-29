import React,{useState,useEffect} from 'react';
import axios from 'axios';//make sure axios is installed

const DataComponent=()=>{
    const[data,setData]=useState('');
    const[inputmessage,setinputmessage]=useState("")
    const [responsemessage,setresponsemessage]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:3000/api/data').then(response=>
            setData(response.data.message))
            .catch(error=>console.error('Error fetching data:',error));
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/data",{message:inputmessage}).then(response=>setresponsemessage(response.data.message)).catch(error=>console.error("Error sending:",error))}
    return(
        <div>
            <h1>data from server</h1>
            <p>{data}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter the message
                    <input type="text" value={inputmessage} onChange={(e)=>setinputmessage(e.target.value)}></input>
                </label>
                <button type="submit">submit</button>
            </form>
            <p>{responsemessage}</p>
        </div>
    );
};
export default DataComponent;