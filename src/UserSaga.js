import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function UserSaga() {

   const data=  useSelector(y=>y.myuserSaga);

   const dis = useDispatch();

   console.log(data);

   useEffect(()=> {

    dis({type: 'GET_USERS_REQUESTED'})

   },[]);

 



  return (
    <div>UserSaga</div>
  )
}
