import React, { useEffect, useState } from 'react'
import AllTasks from './AllTasks'
const Tasks = () => {
    
    
  return (
    <>
        <form action="/">
      
      <h2>Create a Task</h2>
      <label htmlFor="tb1">Title</label>
      <input type="text" placeholder='e.g. Watch a video from Fireship.' id='tb1'/>
      <label htmlFor="tb2">Description</label>
      <input type="text" placeholder='e.g. Watch a video about Next.js Auth'/>
      <label htmlFor="dt">Date</label>
      <input type="date" name="date" id="dt" />
      <label htmlFor="cb1">Toggle Completed</label>
      <input type="checkbox" name="check1" id="cb1" />
      <label htmlFor="cb2">Toggle Important</label>
      <input type="checkbox" name="check2" id="cb2" />
      <button>+ Create Task</button>
    </form>
    </>
  )
}

export default Tasks