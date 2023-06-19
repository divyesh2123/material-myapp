import React from 'react'

 function EmployeeDChild(pros) {

    console.log(pros);
  return (
    <div>EmployeeDChild</div>
  )
}

export default React.memo(EmployeeDChild, (pre,next) => {

  if(pre.item.length == next.item.length)
  {
    return true;
  }
  else
  {
  return false;
  }
});
