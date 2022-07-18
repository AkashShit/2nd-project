import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const[name,setName]=useState();
    const handling=(event)=>{
        event.preventDefault();
        alert(`user name is ${name}`);
    }
  return (
    <div>
        <h1> form handling...</h1>
        <from>
            <label> Enter your name :
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> </label>
                <input type="submit" value="submit" onClick={handling}/>
        </from>
    </div>
  )
}

export default Contact