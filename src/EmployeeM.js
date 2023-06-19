import React, { useState } from 'react'
import EmployeeDChild from './EmployeeDChild';

export default function EmployeeM() {

 const [data,setdata] =  useState('');

 const [items,setitems] = useState([]);

 const myhandler =(e)=> {

    setdata(e.target.value)
 }

 const removeitem = (e)=> {

 }

 const SaveData = (e)=> {

    let d = [...items];

    d.push(data);

    setitems(d);

 }

  return (
    <div>
        <input type='text' onChange={myhandler} />
        <input type='button' value="save"  onClick={SaveData}/>

        <EmployeeDChild item={items} myremoveItem  = {removeitem}></EmployeeDChild>

    </div>
  )
}
