import React from 'react'
import "./task.css";
const TaskCard = ({title}) => {
  return (
    <>
    <div id='taskcard'>
      <p>Title : {title}</p>
      <p>Description : Hello</p>
      <p>Date : 01/01/2025</p>
      <button id='b1'>Completed</button>
      <button id='b2'>Cancel</button>
    </div>
    </>
  )
}

export default TaskCard