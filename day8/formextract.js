import React,{useState} from 'react'

export const Formextract = () => {
    const [name, setName] = useState('');
    function handlechange(e)
    {
        setName(e.target.value)
    }
  return (
    <div>
        <form>
            <label>First Name:</label>
            <input type="text" value={name} onChange={handlechange}/>
        </form>
        <h1>your name is {name}</h1>
        <button> submit</button>
    </div>
  )
}
