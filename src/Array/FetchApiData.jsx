import React, { useEffect } from 'react'
import { useState } from 'react'

const FetchApiData = () => {
    const[user,setUser]=useState([]);
    const response=async()=>{
        const data=await fetch("https://jsonplaceholder.typicode.com/users");
        setUser(await data.json());
        // const data1=await data.json();
        // console.log(data1);
    }
    useEffect(()=>{
        response();
    },[])
  return (
    <>
     <div>FetchApiData</div>
     {user.map((CurrentData)=>{
         return (
         <>
         <p> Name is : {CurrentData.name}</p>
         <p> gmail is : {CurrentData.email}</p>
         </>)
     })}
    </>
   
  )
}

export default FetchApiData