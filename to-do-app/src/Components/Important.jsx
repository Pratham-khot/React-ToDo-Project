import React from 'react'
import { PiListChecksBold } from "react-icons/pi";
const Important = ({onClick}) => {
  return (
    <div className="important" onClick={onClick}>
                    <PiListChecksBold />
    
                    <p>Important</p>
                </div>
  )
}

export default Important