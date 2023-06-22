import React, { useCallback, useState } from 'react'
import ToDOListItem from './ToDOListItem';

export default function ToDoList() {

   const [data,setData] = useState([]);

   const [input,setInput]= useState('');


   const mydelete =useCallback((index)=> {

    let t = [...data];
    t.slice(index,1);
    setData(t);

   },[data])

   const changeHandler = (e)=> {

    setInput(e.target.value);

   }

   const saveInfo = ()=> {
        let d = [...data];

        d.push(input);

        setData(d);
   }
  return (
    <>
        
        <input type='text'  name='item' onChange={changeHandler}/>

        <input type='submit' value='save' onClick={saveInfo} />

        <ToDOListItem item={data} remove={mydelete}/>

    </>
  )
}
