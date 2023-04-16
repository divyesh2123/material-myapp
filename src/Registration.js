import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Registration() {

    const [data,setdata] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
      })

      const handler = (e)=>{

        if(e.target.type != "checkbox"){
            setdata({...data,[e.target.name] : e.target.value});
        }
        else
        {
            setdata({...data,[e.target.name] : e.target.checked});
        }
       

      }

      const mysubmit = (e)=>{

        e.preventDefault();

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",data).then(y=> {

        console.log(y.data);
        })

        console.log(data);
      }

  return (
    <Form onSubmit={mysubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title"
         name='title' onChange={handler} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter FirstName"
          name='firstName' onChange={handler}
        
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter LastName"
        
        name='lastName' onChange={handler}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email"
        name='email' onChange={handler}
        
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Password" 
         name='password' onChange={handler}
        
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ConfirmPassword</Form.Label>
        <Form.Control type="password"
         placeholder="Please Confirm Password"
         name='confirmPassword' onChange={handler}
         
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        label="Please Accept Terms and Condtion" 
        name='acceptTerms' onClick={handler}
        
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
