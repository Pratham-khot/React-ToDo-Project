import React, { useState } from 'react'
import NameLogo from './NameLogo';
import AllTasks from './AllTasks';
import Important from './Important';
import Completed from './Completed';
import DoItNow from './DoItNow';
import SignOut from './SignOut';
import { IoMdAddCircle } from "react-icons/io";
const Home = () => {
    const [title,setTitle]=useState("");
    
    
  return (
    <>
        <div className="container">
        <div className="leftdiv">
            <NameLogo/>
            <div className="left2">
            <AllTasks onClick={()=>setTitle("All Tasks")}/>
            <Important onClick={()=>setTitle("Important")}/>
            <Completed onClick={()=>setTitle("Completed")}/>
            <DoItNow onClick={()=>setTitle("Do It Now")}/>
            
            </div>
            <div className="left3">
                <SignOut/>
            </div>
        </div>
        <div className="rightdiv">
            <h1>{title}</h1>
            <div className='rightdiv1'>
                <p><IoMdAddCircle /> Add New Task</p>
            </div>
        </div>
        </div>
    
    </>
        
  )
}

export default Home