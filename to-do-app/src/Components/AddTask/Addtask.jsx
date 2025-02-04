import React, { useState } from 'react'
import CreateTask from '../CreateTask/CreateTask'
import TaskCard from '../Taskcrad/TaskCard'
import { MdOutlineAdd } from "react-icons/md";
import { useEffect } from 'react';

import './addtask.css'

function Addtask({atitle}) {
    const [showForm,setShowForm]=useState(false);
    const [tasks,setTasks]=useState([]);
  function handleClick(){
      setShowForm(true)   
  }
  useEffect(() => {
    async function getToDo() {
      try {
        const resp = await fetch("https://todo-backend-two-bice.vercel.app/todos",{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          }
        });
        const respObj = await resp.json();
        console.log(respObj);
        
        setTasks(respObj); // Update state with fetched tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    getToDo();
  }, []);
  return (
    <>
    <h2>{atitle}</h2>
    <div id='container1'>
      
        {tasks.map((item)=>{
          return(
            <div className='task'>
              <TaskCard
              title={item.title}
              />
              </div>
          )
        })}
        
      
      <div className='newtask' onClick={handleClick}>
      <p><MdOutlineAdd /> Add Tasks</p>
      </div>
      {showForm && <CreateTask onClose={()=>setShowForm(false)}/>}
    </div>
    
    
      
   
   
    
    </>
  )
}

export default Addtask