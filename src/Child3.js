import React from 'react'

export default function Child3(props) {

    console.log(props);
  return (
    <div>
        {props.item.firstName}

    </div>
  )
}
