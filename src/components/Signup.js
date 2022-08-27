import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/Signup.css"
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [passsword, setpasssword] = useState("");
  const [acctno, setacctno] = useState("");
  const [initialbalance, setinitialbalance] = useState("");
    const signup=()=>{
        alert("e don dey sign o")
    }
  return (
    <>
      <section className='bg-light'>
       <h3 className='pt-5'>Signup</h3>
       <center>
        <div className='div-input'>
        <input type="text"  placeholder='Firstname' className='input-area' onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text"  placeholder='Lasttname' className='input-area' onChange={(e)=>setlastname(e.target.value)}/>
        <input type="number"  placeholder='Phonenumber' className='input-area' onChange={(e)=>setphone(e.target.value)}/>
        <input type="email"  placeholder='Email address' className='input-area' onChange={(e)=>setemail(e.target)}/>
        <input type="password"  placeholder='Password' className='input-area' onChange={(e)=>set}/>
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