import React, { useState } from 'react'

export default function Home() {

  const[data,setData]  =   useState(0)

  const counter = ()=> {

    setData(data+1);
  }

  return (
    <div>
        
        {data}

        <button onClick={counter}>Counter</button>
    </div>
  )
}
