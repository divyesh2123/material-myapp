import React from 'react'

 function EmployeeDChild(pros) {

    console.log(pros);
  return (
    <div>EmployeeDChild</div>
  )
}

export default React.memo(EmployeeDChild);
