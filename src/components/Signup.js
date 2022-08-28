import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/Signup.css"
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accountnumber, setaccountnumber] = useState(Math.floor(Math.random()*100000000000));
  const [initialbalance, setinitialbalance] = useState("15000");

  const signup=()=>{
    setaccountnumber(Math.floor(2+Math.random()*10000000000))
    setinitialbalance(15000);
    let userDetails={firstname,lastname,Phonenumber,email,password,accountnumber,initialbalance}
    console.log(userDetails)
    alert("hello express");
  }
return(
    <>
      <section className='bg-light'>
       <h3 className='pt-5'>Signup</h3>
       <center>
        <div className='div-input'>
        <input type="text"  placeholder='Firstname' className='input-area' onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text"  placeholder='Lastname' className='input-area' onChange={(e)=>setlastname(e.target.value)}/>
        <input type="number"  placeholder='Phonenumber' className='input-area' onChange={(e)=>setPhonenumber(e.target.value)}/>
        <input type="email"  placeholder='Email address' className='input-area' onChange={(e)=>setemail(e.target.value)}/>
        <input type="password"  placeholder='Password' className='input-area' onChange={(e)=>setpassword(e.target.value)}/>
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