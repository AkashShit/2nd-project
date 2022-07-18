import React, { useEffect } from 'react'
import { useState } from 'react'

const AutoCount = () => {
 const[Count,setAutoCount]=useState(0);
 useEffect(()=>{
    setTimeout(()=>{
        setAutoCount((count)=> count + 1)
    },1000)
})

    return (
        <>
     <div>AutoCount</div>
    <h1>{Count}</h1>
        </>
   
  )
}

export default AutoCount