import { useRef } from "react"
import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
const Login = () => {

    const navigate=useNavigate();
    const username=useRef();
    const password=useRef();
    function goHome(e){
        e.preventDefault();
        
        
        callApi()

        async function callApi(){
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
            // console.log(data.body);
            try{

                const resp=await fetch('https://todo-backend-two-bice.vercel.app/login',data);
                // console.log(respObj)
                if(resp.status===200){
                    const respObj=await resp.json();
                    console.log("hii");
                    
                    localStorage.setItem('token',respObj.token)
                    localStorage.setItem('username',respObj.userName)
                    alert(`Welcome ${respObj.userName}`);
                    navigate('/dashboard');
                }
                else{
                    alert("Please Enter correct credentials");
                }

            }catch(error){
                alert(error);
            }

        }

    }

    

  return (
    <div className="container">
        <form className='loginform' onSubmit={(e)=>{goHome(e)}}>
            <h1>Login</h1>
            <input type="text" placeholder='Enter User Name ' ref={username} />
            <input type="password" placeholder='Enter Password' ref={password}/>
            <button   type="submit">Login</button>
            <p>Don't have an account?<Link to="/register"> Signup</Link></p>
        </form>
    </div>
  )
}

export default Login

// https://todo-backend-two-bice.vercel.app/login