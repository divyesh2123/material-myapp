import React from 'react'

function ToDOListItem(props) {

    console.log(props);

    console.log("this is rerender");
  return (
    <div>ToDOListItem</div>
  )
}

export default React.memo(ToDOListItem);
