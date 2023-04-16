import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
export default function Login() {

    const [data,setData] = useState({
        email: "",
        password: ""
    })

    const mychange=(e)=> {

        setData({...data,[e.target.name]: e.target.value})
    }

    const saveData= (e)=> {

        
       

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data).then(y=> {

        console.log(y.data);

        localStorage.setItem("user", JSON.stringify(y.data) )
        })
    }

  return (
    <>

<TextField id="standard-basic" label="Standard" variant="standard"  name="email" onChange={mychange} />
<TextField id="standard-basic" label="Standard" variant="standard" name="password" onChange={mychange}/>
<Button variant="outlined" onClick={saveData}>Outlined</Button>
    </>
  )
}
