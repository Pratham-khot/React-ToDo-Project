import React from 'react'
import "./signup.css"
import Login from '../Login/Login'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Signup = () => {
    const navigate=useNavigate();
    const username=useRef();
    const password=useRef();
    
    function goLogin(e)
    {
        e.preventDefault();
        

        async function callApi()
        {
            const userInfo={
                username:username.current.value,
                password:password.current.value
            }
            const data={
                method:"POST",
                body:JSON.stringify(userInfo),
                headers:{
                    "Content-Type":"application/json",
                },
            }
            try{
                const resp= await fetch("https://todo-backend-two-bice.vercel.app/register",data);
                if(resp.status===201)
                {
                    const respObj=await resp.json();

                    localStorage.setItem('token',respObj.token),
                    localStorage.setItem('username',respObj.username),
                    alert("User Registered Successfully!")
                    navigate('/login');
                }
                else{
                    alert("Please Enter Credentials");
                }
            }
                catch(error){
                    alert(error);
                }
            
        }
        callApi()
    }




  return (
    <div className="container">
        <form className='signupform' onSubmit={(e)=>{goLogin(e)}}>
            <h1>Sign Up</h1>
            <input type="text" placeholder='Enter the Username' ref={username}/>
            <input type="password" placeholder='Enter the Password' ref={password}/>
            <button type='submit' >Register</button>
            <p>Already Signed in</p><Link to='/login'>Login</Link>
        </form>
    </div>
  )
}

export default Signup