import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

export default function Employee() {

   const [data,setData]=  useState({
        email:"",
        Password: ""
    })

   const [myarray,setmyarray] = useState([]);

   const [index,setIndex] = useState(-1);

    const handeler = (e)=> {

        setData({...data,[e.target.name]: e.target.value});


    }

    const saveInfo = (e)=> {

        e.preventDefault();

        if(index <0)
        {

        let myindex = myarray.findIndex((value)=> {

           return value.email == data.email;
        })

        if(myindex <0)
        {

        let d = [...myarray];

        d.push(data);

        setmyarray(d);

        }

        }

        else
        {
            let d = [...myarray];

            d[index].email = data.email;
            d[index].Password = data.Password;
            setmyarray(d);

            setIndex(-1);
        }


        console.log(data);

    }

    const removeitem = (index)=> {

      alert("D");
      let d = [...myarray];
      d.splice(index,1);

setmyarray(d);
    }

    const editItem = (index) => {

      setIndex(index);

      let onj = myarray[index];
     
      setData({

        email: onj.email,
        Password: onj.Password

      });
    }

  return (
    <>
    <Form onSubmit={saveInfo}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={data.email} name='email' onChange={handeler} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={data.Password} name="Password" onChange={handeler} />
    </Form.Group>
   
    <Button variant="primary" type="submit" >
      Submit
    </Button>

    

  </Form>


<Table striped bordered hover variant="dark">

<thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
            {
myarray.map((valune,index)=> {

return(

    <tr>
          <td>{index+1}</td>
          <td>{valune.email}</td>
          <td>{valune.Password}</td>
          <td> <Button variant="primary"  onClick={()=>{editItem(index)}}>Edit</Button></td>
          <td> <Button variant="primary" onClick={()=>{removeitem(index)}}>Delete</Button></td>
        
        </tr>


)


})

            }

      </tbody> 
</Table>

</>

  )
}
