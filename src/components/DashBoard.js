import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/DashBoard.css"
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
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
         <div></div>
       </div>
    </>
  )
}

export default DashBoard