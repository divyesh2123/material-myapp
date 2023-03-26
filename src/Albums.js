import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Albums() {

  const [data,setData] = useState([]);

  useEffect(()=> {

    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(y=> {

        console.log(y);
        setData(y.data)
    });

  },[])
  return (
    <ul>

    {
        data.map((value)=> {

            return (<li>{value.title}</li>)
        })
    }

    </ul>
  )
}
