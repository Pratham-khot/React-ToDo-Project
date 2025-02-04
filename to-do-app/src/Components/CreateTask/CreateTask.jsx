import React, { useRef, useState } from 'react'
import "./createtask.css";
function CreateTask({onClose}) {

  const titleRef=useRef();
  
  function handleFormSubmit(e){
    
    e.preventDefault();
    const todos={
      title:titleRef.current.value,
    }
    const data={
        method:"POST",
        body:JSON.stringify(todos),
        headers:{
          "Content-type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
    }
    async function addToDo(){
      try{
      const resp=await fetch("https://todo-backend-two-bice.vercel.app/todos",data);
      const respObj=await resp.json();
      if(resp.status==201)
      {
        alert("Task Added Successfully!");
      }
      else{
        alert("Something went wrong.Please try Again..")
      }
    }
    catch(e){
      console.log(e);
    }
    onClose();
    
  }
  addToDo();

  }
  return (
    <>
    
      <form onSubmit={(e)=>handleFormSubmit(e)}>
      <h3>Create a Task</h3>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" placeholder="Enter title" required ref={titleRef} />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" placeholder="Enter description"  />
      <label htmlFor="date">Date</label>
      <input id="date" type="date"  />
      <div className="form-buttons">
        <button type="submit" id='b1'>Add Task</button>
        <button type="button" id='b2' onClick={onClose}>Cancel</button>
      </div>
    </form>
    
    </>
    
  )
}

export default CreateTask