import React from 'react'

import { useSelector, useDispatch}  from 'react-redux'

export default function CounterSaga() {


    const counter = useSelector(y=>y.counter);

    const dis = useDispatch();

    const inc = ()=> {

        dis({type: 'INC_AYNC'})

    }

    
    
  return (
    <div>
        {counter}

        <button onClick={inc}>+</button>
        <button>-</button>
    </div>
  )
}
