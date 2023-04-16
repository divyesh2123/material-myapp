import React, { useEffect, useState } from 'react'
import authFetch from './axiosbase/interceptors'
export default function DisplayAccount() {

   const [data,setData]= useState([])

    useEffect(()=> {

      authFetch.get("/accounts").then(y=> {
            console.log(y.data);
        })

    })

  return (
    <div>DisplayAccount</div>
  )
}
