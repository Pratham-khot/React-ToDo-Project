import React from 'react'
import { MdOutlineEventNote } from "react-icons/md";
const DoItNow = ({onClick}) => {
  return (
    <div className="doit" onClick={onClick}>
                <MdOutlineEventNote />
                <p>Do It Now</p>
            </div>
  )
}

export default DoItNow