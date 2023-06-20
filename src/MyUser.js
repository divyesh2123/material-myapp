import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './asycaction/userAction';

export default function MyUser() {

  const user =  useSelector(y=>y.myuser);



  console.log(user);

  const dis = useDispatch();

  useEffect(()=> {

    dis(getUserList(1))

  },[])
  return (
    <div>MyUser</div>
  )
}
