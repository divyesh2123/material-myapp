import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

export default function Model(props) {


    const [data,setData] =  React.useState({
        PatientName : "",
        AppointmentDate: "",
        Id: "",
        City: "",
        State: "",
        Zipcode: ""
    
      });


      const formHandler = (e)=> {
        setData({...data,[e.target.name] : e.target.value})
      }

      const dateHandler = (e) =>{
        setData({...data,"AppointmentDate" : e})
      }

      const saveData = ()=> {

        let d = [...props.array];
        d.push({...data,id: d.length+1});
        props.setarray(d)
        props.handleClose();
      }


  return (
    <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='PatientName'
            label="Patient Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={formHandler}
          />




<DatePicker label="Select Appoitnment date"  fullWidth  variant="standard"  margin="dense" 
 onChange={dateHandler}

/>


<TextField
            autoFocus
            margin="dense"
            id="city"
            label="Patient city"
            type="text"
            name='City'
            fullWidth
            variant="standard"
            onChange={formHandler}
          />


<TextField
            autoFocus
            margin="dense"
            id="name"
            name="State"
            label="Patient state"
            type="text"
            fullWidth
            variant="standard"
            onChange={formHandler}
          />


<TextField
            autoFocus
            margin="dense"
            id="zipcode"
            name="Zipcode"
            label="Patient zipcode"
            type="text"
            fullWidth
            variant="standard"
            onChange={formHandler}
          />



        </DialogContent>
        <DialogActions>
          <Button onClick={saveData}>Save</Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  )
}
