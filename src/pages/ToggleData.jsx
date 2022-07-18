import React from 'react'
import { useState } from 'react'

const ToggleData = () => {
    const[name,setName]=useState("akash");
   function change()
    {
        // setName(name==="akash"?"rajdeep": "akash")
        if(name==="akash")
        {
            setName("shit");
        }
        else if(name==="shit")
        {
            setName("akash");
        }
    }
  return (
    <div>
        <h1 style={{background:"color"}}>ToggleData using UseState hook</h1>
        <h1>{name}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default ToggleData