import React, { useEffect, useState } from 'react'
import { IoMdHome } from "react-icons/io";
const AllTasks = ({onClick}) => {
  
  
  return (
    <div className="alltask" onClick={onClick}>
                    <IoMdHome />
                    <p>All Tasks</p>
                </div>
                
  )
}

export default AllTasks