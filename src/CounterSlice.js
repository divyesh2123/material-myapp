import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slice/counterSlice'

export default function CounterSlice() {

 const d =   useSelector(y=>y.counter.count)
 const dispatch = useDispatch()
  return (
    <div>
    
    <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>Increment +3</button>
      <span className='counter'>{d}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    
    </div>
  )
}
