import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FetchApiPic = () => {
    const[data,setData]=useState([]);
    const getData=async()=>{
      const response=await fetch('https://jsonplaceholder.typicode.com/photos');
    setData(await response.json());
    //  console.log(response);
    }
    useEffect(()=>{
    getData();
    },[])
  return (
    <>
    {data.map((val)=>{
      return (<div className='col-md-4' key={val.id}>
      <div className="card card" >
      <p> Title : {val.title}</p>
      <div className="card-body">
        
      <h5 className="card-title">thumbnail : {val.thumbnailUrl}</h5>
      <img src={val.url} width="140px" height="140px"/>
      <p className="card-text">{val.albumId}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      </div>
  </div> )
    })}
    <div>fetchApiPic</div>
    </>
  )
}

export default FetchApiPic;