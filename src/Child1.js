import React from 'react'
import Child2 from './Child2'

export default function Child1(props) {
  return (
    <div>
        
        <Child2 item={props.item}/>
    </div>
  )
}
