import React, { useState } from 'react'
import { useEffect } from 'react';

const Chat = () => {
    const [count,setCount]=useState(0);
     useEffect(()=>{
        if(count>0)
        {
            document.title=`chat ${count}`;
        }
        else
        {
            document.title=` chat `;
        }
       
     })
  return (
    <div>
        <h1> count {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default Chat;