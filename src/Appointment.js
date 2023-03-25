import { Button } from '@mui/material';
import React, { useState } from 'react'
import DisplayData from './DisplayData';
import Model from './Model';

export default function Appointment() {


  const [array,setarray] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (index)=> {

    let p = [...array].filter(y=> y.id != index);



    

    setarray(p);


  }

  return (
    <div>
             <Button variant="outlined" onClick={handleClickOpen}>
        Add Details
      </Button>

        <DisplayData rows={array}  removedata= {handleDelete}/>

      <Model  open={open}  
      handleClickOpen={handleClickOpen} 
      handleClose={handleClose}
    
      array = {array}
      setarray={setarray}

      
      />

    </div>
  )
}
