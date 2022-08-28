import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/Signup.css"
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [Phonenumber, setPhonenumber] = useState(0);
  const [email, setemail] = useState("");
  const [passsword, setpasssword] = useState("");
  const [acctno, setacctno] = useState(0);
  const [initialbalance, setinitialbalance] = useState(0);
  const [usersDetails, setusersDetails] = useState({});
  const endpoint="http://localhost:3500/users/signup"
  // const endpoints="http://localhost:3500/users/test"
  const signup=()=>{
    // axios.get(endpoints).then((result)=>{
    //   console.log(result)
    // })
    setacctno(Math.floor(Math.random()*100000000000))
      setinitialbalance(5000);
      let newNigga={firstname,lastname,Phonenumber,email,passsword,acctno,initialbalance}
      setusersDetails(newNigga)
      axios.post(endpoint,usersDetails).then((result)=>{
        // console.log(result.data.message);
        console.log(usersDetails)
    }).catch((err)=>{
      console.log(err.message);
      console.log(err)
    })
    }
  return (
    <>
      <section className='bg-light'>
       <h3 className='pt-5'>Signup</h3>
       <center>
        <div className='div-input'>
        <input type="text"  placeholder='Firstname' className='input-area' onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text"  placeholder='Lastname' className='input-area' onChange={(e)=>setlastname(e.target.value)}/>
        <input type="number"  placeholder='Phonenumber' className='input-area' onChange={(e)=>setPhonenumber(e.target.value)}/>
        <input type="email"  placeholder='Email address' className='input-area' onChange={(e)=>setemail(e.target)}/>
        <input type="password"  placeholder='Password' className='input-area' onChange={(e)=>setpasssword(e.target.value)}/>
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