import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "../styles/Deposits.css"
const Deposits = () => {
    const [amount, setamount] = useState("");
    const [accountnumber, setaccountnumber] = useState("");
    const [accountname, setaccountname] = useState("");
    const endpoint5="http://localhost:3500/users/deposits"
    const deposits=()=>{
        let depositsObj={amount,accountnumber,accountname};
        axios.post(endpoint5,depositsObj).then((result)=>{
            console.log(result.data);
        });
        
    }
  return (
    <>
      <div className="dashboard-section">
      <div className="side-navbar-div">
        <ul className="side-navbar-ul">
            <li className="side-navbar-li mb-3"><Link to="/dashboard" className="link-tab" >Dashboard</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/deposits" className="link-tab i btn" id="li-active">Deposits</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Transfer</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Wallet</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Transactions</Link></li>
        </ul>
      </div>
      <div className="side-navbar-div4">
            <center>
                <h1>Deposits</h1>
                <input type="text" className='form-control my-3 w-25' placeholder='amount' onChange={(e)=>setamount(e.target.value)}/>
                <input type="text" className='form-control my-3 w-25' placeholder='account number' onChange={(e)=>setaccountnumber(e.target.value)}/>
                <input type="text" className='form-control my-3 w-25' placeholder='account name' onChange={(e)=>setaccountname(e.target.value)}/>
                <button className='btn w-25' onClick={deposits}>Deposits</button>
            </center>
      </div>

    </div>
    </>
  )
}

export default Deposits;