import React from 'react'
import { useState } from 'react'

const ObjectFetch = () => {
    const obj={
        id:0,
        name:"akash shit",
        age:22,
        qualification:"Bca"
    }
    const [BioData,setBioData]=useState(obj);
  return (
    <div>
      <h2>{BioData.id}  {BioData.name}   {BioData.qualification}  {BioData.age}</h2>
      <button onClick={()=>setBioData({})}>clear</button>
      <button onClick={()=>setBioData({id:1,name:"kash",age:23,qualification:"Mern"})}>Other value</button>
    </div>
  )
}

export default ObjectFetch;