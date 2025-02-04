import React, { useState } from 'react'
import Userinfo from '../../Components/UserInfo/Userinfo'
import { IoMdHome } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import "./home.css"
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Addtask from '../../Components/AddTask/Addtask';
import Important from '../../Components/Important/Important';
import Completed from '../../Components/Completed/Completed';
import Doitnow from '../../Components/Doitnow/Doitnow';

const Home = () => {
  const navigate=useNavigate();
  const [tab,setTab]=useState("");
    const handleSignout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login')
    }
  return (
    <>
    <div className="container">
      <div className="leftdiv">
        <div className="leftdiv1">
          <Userinfo/>
        </div>
        <div className="leftdiv2">
          <button onClick={()=>setTab("All Tasks")}><IoMdHome /> Add Tasks</button>
          <button onClick={()=>setTab("Important")}><MdNotificationImportant /> Important</button>
          <button onClick={()=>setTab("Completed")}><IoMdDoneAll /> Completed</button>
          <button onClick={()=>setTab("Do It Now")}><TbNotes /> Do It Now</button>
        </div>
        <div className="leftdiv3">
          <button onClick={handleSignout}><MdOutlineLogout /> Sign Out</button>
        </div>
      </div>
      <div className="rightdiv">
        {!tab && <p>Welcome to TO DO</p>}
      {tab=== "All Tasks" && <Addtask atitle={tab}/>}
      {tab=== "Important" && <Important ititle={tab}/>}
      {tab=== "Completed" && <Completed ctitle={tab}/>}
      {tab=== "Do It Now" && <Doitnow dtitle={tab}/>}
      </div>
      </div>   
    </>
  )
}

export default Home