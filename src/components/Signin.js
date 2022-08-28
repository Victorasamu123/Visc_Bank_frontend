import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "../styles/Signup.css"
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  const endpoint1="http://localhost:3500/users/signin"
  const signin=()=>{
    let user={email,password};
    axios.post(endpoint1,user).then((result)=>{
      console.log(result.data.message);
      setmessage(result.data.message);
    })
    alert("e don dey dashboard");
  }
  return (
    <>
      <section className='bg-light'>
        <center>
      {
            message!=""?<div className='alert alert-danger w-25'>{message}</div>:<div></div>
          }
          </center>
       <h3 className='pt-5'>Signin</h3>
       <center>
        <div className='div-input'>
        <input type="email"  placeholder='Email address' className='input-area' onChange={(e)=>setemail(e.target.value)}/>
        <input type="password"  placeholder='Password' className='input-area' onChange={(e)=>setpassword(e.target.value)}/>
        <button className='btn w-25 mt-3' onClick={signin}>signin</button>
        <p>
            Do not have an account?<Link to="/signup" className='link'>sign up here</Link>
        </p>
        </div>
       </center>
      </section>
    </>
  )
}

export default Signin;