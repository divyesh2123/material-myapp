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


      React.useEffect(()=> {

        if(props.id > 0)
        {
          let myobj = props.array.find((i)=> i.id == props.id);
          setData(myobj);

        }
        else
        {
          setData({
            PatientName : "",
            AppointmentDate: "",
            Id: "",
            City: "",
            State: "",
            Zipcode: ""

          })
        }


      },[props.id])


      const formHandler = (e)=> {
        setData({...data,[e.target.name] : e.target.value})
      }

      const dateHandler = (e) =>{
        setData({...data,"AppointmentDate" : e})
      }

      const saveData = ()=> {

        let d = [...props.array];
        if(props.id < 0)
        {
      
        d.push({...data,id: d.length+1});
        }
        else
        {
            let myobj = d.find((v)=> {

              return v.id == props.id
            });

            myobj.AppointmentDate = data.AppointmentDate;
            myobj.City= data.City;
            myobj.State = data.State;
            myobj.PatientName = data.PatientName;
            myobj.Zipcode = data.Zipcode;
        }
        props.setarray(d);
        props.setId(-1);

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
            value = {data.PatientName}

          />




<DatePicker label="Select Appoitnment date"  fullWidth  variant="standard"  margin="dense" 
 onChange={dateHandler}
 value = {data.AppointmentDate}
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
            value={data.City}
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
            value={data.State}
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
            value={data.Zipcode}
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
