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

  return (
    <div>
             <Button variant="outlined" onClick={handleClickOpen}>
        Add Details
      </Button>

        <DisplayData rows={array} />

      <Model  open={open}  
      handleClickOpen={handleClickOpen} 
      handleClose={handleClose}
    
      array = {array}
      setarray={setarray}

      
      />

    </div>
  )
}
