import React, { useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import "../styles/DashBoard.css"
import icon1 from "../images/dashboard_customize_FILL1_wght400_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL1_wght400_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL1_wght400_GRAD0_opsz48.svg"
const DashBoard = () => {
  return (
    <>
       <div className='container-div'>
         <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" className='side-nav-link'><img src={icon1} alt="" width={20}/> Dashboard</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon2} alt="" width={20}/> Fund account</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon3} alt="" width={20}/> Transfer</Link></li>
            <li><Link to="/" className='side-nav-link'>Wallet</Link></li>
            <li><Link to="/" className='side-nav-link'>Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'>Quick transaction</Link></li>
          </ul>
         </div>
         <div></div>
       </div>
    </>
  )
}

export default DashBoard