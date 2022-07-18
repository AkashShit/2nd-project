import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
    const{id,name}=useParams();
  return (
    <div>

        <h1>Test page</h1>
        <h2>{id}/{name}</h2>
    </div>
  )
}

export default Test