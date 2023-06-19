import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { GetUserData } from './action/userAction';

export default function UserList() {

    const d = useSelector(y=>y.user);

    const dis = useDispatch();

    console.log(d);

    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=> {
            dis( GetUserData(y));
        })

    },[])

    
  return (
    <div>UserList</div>
  )
}
