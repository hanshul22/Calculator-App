import React from 'react'

function Display(props) {
  return (
    <div>
      <input type="text" defaultValue={props.expression}  />
    </div>
  )
}

export default Display
