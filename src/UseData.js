import React, { useEffect, useState } from 'react'

export default function UseData() {


  const [data,setData] =  useState([])

  console.log(data);
  
     
      

  useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(y=>y.json()).then(y=> {


        setData(y);
    })

  },[])
  
  return (
    <div>UseData</div>
  )
}
