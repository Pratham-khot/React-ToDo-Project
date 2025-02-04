import React from 'react'
import "./userinfo.css"
const Userinfo = () => {

    console.log(localStorage.getItem('username'));
    const name=localStorage.getItem('username');
    const i=name[0];
  return (
    <div className='userInfo'>
        <p id='p1'>{i}</p>
        <p id="p2">{localStorage.getItem('username') || "Guest User"}</p>
    </div>
  )
}

export default Userinfo