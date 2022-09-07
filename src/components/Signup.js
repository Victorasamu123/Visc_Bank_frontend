import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Signup.css"
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [transferpin, settransferpin] = useState("");
  const [accountnumber, setaccountnumber] = useState(Math.floor(Math.random() * 100000000000));
  const [initialbalance, setinitialbalance] = useState(0);
  const [message, setmessage] = useState("")
  const endpoint = "http://localhost:3500/users/signup"
  let navigate= useNavigate()
  const signup = () => {
    setaccountnumber(2 + Math.floor(Math.random() * 10000000000))
    setinitialbalance(0);
    if (firstname == "" || lastname == "" || Phonenumber
      == "" || email == "" || password == "" || transferpin== "") {
      console.log("enter correct informatiion")
      setmessage("enter correct informatiion");
    } else {
      let userDetails = { firstname, lastname, Phonenumber, email, password,transferpin, accountnumber, initialbalance }
      axios.post(endpoint, userDetails).then((result) => {
        console.log(result.data);
        setmessage(result.data.message);
      }).catch((err) => {
        console.log(err);
      })
      navigate("/signin",message);
    }

  }
  return (
    <>
      <section className='bg-light'>
        <center>
          {
            message !== "" ? <div className='alert alert-danger w-25'>{message}</div> : <div></div>
          }

        </center>
        <h3 className='pt-5'>Signup</h3>
        <center>
          <div className='div-input'>
            <input type="text" placeholder='Firstname' className='input-area' onChange={(e) => setfirstname(e.target.value)} />
            <input type="text" placeholder='Lastname' className='input-area' onChange={(e) => setlastname(e.target.value)} />
            <input type="number" placeholder='Phonenumber' className='input-area' onChange={(e) => setPhonenumber(e.target.value)} />
            <input type="email" placeholder='Email address' className='input-area' onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder='Password' className='input-area' onChange={(e) => setpassword(e.target.value)} />
            <input type="password" placeholder='Transfer pin' className='input-area' onChange={(e) => settransferpin(e.target.value)} />
            <button className='btn w-25 mt-3 btn-primary' onClick={signup}>signup</button>
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