import React from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/Signup.css"
const Signup = () => {
    const signup=()=>{
        alert("e don dey sign o")
    }
  return (
    <>
      <section className='bg-light'>
       <h3 className='pt-5'>Signup</h3>
       <center>
        <div className='div-input'>
        <input type="text"  placeholder='Firstname' className='input-area'/>
        <input type="text"  placeholder='Lasttname' className='input-area'/>
        <input type="text"  placeholder='Phonenumber' className='input-area'/>
        <input type="email"  placeholder='Email address' className='input-area'/>
        <input type="password"  placeholder='Password' className='input-area'/>
        <button className='btn w-25 mt-3' onClick={signup}>signup</button>
        <p>
            Already have an account?<Link to="/signin" className='link'>sign in here</Link>
        </p>
        </div>
       </center>
      </section>
    </>
  )
}

export default Signup