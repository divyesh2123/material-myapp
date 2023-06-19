import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { first } from './action/counterAction';

export default function Counter() {

   const state = useSelector(y=>y);

   const dis = useDispatch();

   const incr = ()=> {

    dis(first())
   }

  return (
    <div>{state}
    
        <button onClick={incr}>+</button>
    </div>
  )
}
