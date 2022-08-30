import React, { useState,useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/DashBoard.css"
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon7 from "../images/search-outline.svg"
import icon8 from "../images/images-removebg-preview.png"
import icon9 from "../images/download-removebg-preview.png"
import icon10 from "../images/download-removebg-preview (1).png"
import icon11 from "../images/wallet-money-in-icon-vector-21023442-removebg-preview.png"
import icon12 from "../images/download-removebg-preview (2).png"
const DashBoard = () => {
  return (
    <>
       <div className='container-div'>
         <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" className='side-nav-link'><div className='active-one'><img src={icon1} alt="" width={20}/> Dashboard</div></Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon2} alt="" width={20}/> Fund account</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon3} alt="" width={20}/> Transfer</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon4} alt="" width={20}/> Wallet</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon5} alt="" width={20}/> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20}/> Quick transaction</Link></li>
          </ul>
         </div>
         <div className='middle-body'>
           <div className='search-div'><img src={icon7} alt=""width={20} className="ms-4"/><input type="text" className='search-input' placeholder='Search...'/></div>
           <div className='username-div'>Asamu victor</div>
           <div className='current-balance-div'>
             <h6 className='current-balance-text pt-3 ms-3'>Current Balance</h6>
             <div className='master-card'><img src={icon8} alt="" width={35}/></div>
             <div className='amount-text pt-2 ms-3'>$11000000</div>
             <div className='account-number mt-5 pt-3 ms-3'>2494 9595 9595 9555</div>
           </div>
           <div className='basic-transactions'>
              <div className='fund-acct me-4'>
               <center>
               <img src={icon9} alt="" width={50}/><br />
               <Link to="/"  className='basic-transactions-link'>Fund account</Link>
               </center>
              </div>
              <div className='fund-acct me-4'>
               <center>
               <img src={icon10} alt="" width={50}/><br />
               <Link to="/"  className='basic-transactions-link'>Transfer</Link>
               </center>
              </div>
              <div className='fund-acct me-4'>
               <center>
               <img src={icon11} alt="" width={50}/><br />
               <Link to="/"  className='basic-transactions-link'>Wallet</Link>
               </center>
              </div>
              <div className='fund-acct'>
               <center>
               <img src={icon12} alt="" width={50}/><br />
               <Link to="/"  className='basic-transactions-link'>Transactions</Link>
               </center>
              </div>
           </div>
           <div className='big-transsaction'>
            
           </div>
         </div>
       </div>
    </>
  )
}

export default DashBoard