import React from 'react'
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
import { useState, useEffect } from 'react'
import axios from "axios"
import "../styles/Wallet.css"
import { Link, useLocation, useNavigate } from "react-router-dom"
const Wallets = () => {
  const [userIdentification, setuserIdentification] = useState("")
  const [transferpin, settransferpin] = useState("")
  const location = useLocation()
  useEffect(() => {
    setuserIdentification(location.state.userIdentification)
    settransferpin(location.state.transferpin)
    console.log(transferpin, userIdentification)
  }, [userIdentification, transferpin])

  return (
    <>
      <div className='container-div'>
        <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" state={{ user_id: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon1} alt="" width={20} /> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon2} alt="" width={20} /> Fund account</Link></li>
            <li><Link to="/transfer" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon3} alt="" width={20} /> Transfer</Link></li>
            <li><Link to="/wallet" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><div className='active-one'><img src={icon4} alt="" width={20} /> Wallet</div></Link></li>
            <li><Link to="/history" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon5} alt="" width={20} /> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20} /> Quick transaction</Link></li>
          </ul>
        </div>
        <div className='middle-body'>
          <h1 className='text-center mt-3'>Wallets</h1>

          <button type="button" className="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Create a new wallet
          </button>


          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                 <input type="text" placeholder='Wallet name' className='form-control mb-3'/>
                 <input type="text" placeholder='Wallet description' className='form-control mb-3'/>
                 <input type="text" placeholder='Target amount' className='form-control mb-3'/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Understood</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallets;