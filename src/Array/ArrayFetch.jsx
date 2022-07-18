import React from 'react'
import { useState } from 'react';

const ArrayFetch = () => {
  const BioData=[
    {id:0,name:"akash",age:20},
    {
      id:1,name:"bikash",age:22
    },
    {
      id:2,name:"ujjwal",age:37
    }
  ]
  const clear=()=>{
    setName([]);
  }
   const[name,setName]=useState(BioData);
   return(
    <>
      {name.map((value)=>{
         return <h1 key={value.id}> { `id:    ${value.id}     name:   ${value.name}     age :${value.age}`}</h1>
      })}
      <button onClick={clear}>clear</button>
    </>
   )
}
export default ArrayFetch;