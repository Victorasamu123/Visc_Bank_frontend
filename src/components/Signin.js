import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Signup.css"
const Signin = () => {
  const signin=()=>{
    alert("e don dey dashboard")
  }
  return (
    <>
      <section className='bg-light'>
       <h3 className='pt-5'>Signin</h3>
       <center>
        <div className='div-input'>
        <input type="email"  placeholder='Email address' className='input-area'/>
        <input type="password"  placeholder='Password' className='input-area'/>
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