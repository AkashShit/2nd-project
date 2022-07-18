import React from 'react'
import { useState, useEffect } from 'react';

export const FetchApi = () => {

    const[user,setUser]=useState([])
    const getData=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        // const data=await response.json();
        // console.log(data);
        setUser(await response.json());
    }
    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <div className='container'>
    <div className='row'>
            {
                user.map((CurrentData)=>{
                    return(
        <div className='col-md-4' key={CurrentData.id}>
            <div className="card cardd" >
            <p> Name is : {CurrentData.name}</p>
            <div className="card-body">
            <h5 className="card-title">Email : {CurrentData.email}</h5>
            <p className="card-text">{CurrentData.address.street}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div> 
                    )
                })
            }
    </div>
</div>

    </div>
  )
}