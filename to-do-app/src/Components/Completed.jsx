import React from 'react'
import { LiaCheckSolid } from "react-icons/lia";
const Completed = ({onClick}) => {
  return (
    <div className="complete" onClick={onClick}>
                    <LiaCheckSolid />
                    <p>Completed</p>
                </div>
  )
}

export default Completed