import React, { useState } from 'react'
import Child1 from './Child1'

export default function EmployeeNew() {
  const [data,setData] = useState({
    firstName : 't',
    lastName : 't1'
  })
  return (
    <div>
        <Child1  item= {data} />
    </div>
  )
}
