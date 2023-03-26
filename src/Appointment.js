import { Button } from '@mui/material';
import React, { useState } from 'react'
import DisplayData from './DisplayData';
import Model from './Model';

export default function Appointment() {


  const [array,setarray] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [id,setId] = useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
    setId(-1);
  };

  const handleDelete = (index)=> {

    let p = [...array].filter(y=> y.id != index);



    

    setarray(p);


  }

  const myid = (id)=> {

    setId(id)

    handleClickOpen();

  }

  

  return (
    <div>
             <Button variant="outlined" onClick={handleClickOpen}>
        Add Details
      </Button>

        <DisplayData rows={array}  removedata= {handleDelete}    setId= {myid}/>

      <Model  open={open}  
      handleClickOpen={handleClickOpen} 
      handleClose={handleClose}
      id={id}
      setId= {setId}
    
      array = {array}
      setarray={setarray}

      
      />

    </div>
  )
}
