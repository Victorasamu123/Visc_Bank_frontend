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
  const [walletname, setwalletname] = useState("")
  const [walletdescription, setwalletdescription] = useState("")
  const [targetamount, settargetamount] = useState("")
  const [fundHistory, setfundHistory] = useState([])
  const [newfundHistory, setnewfundHistory] = useState([])
  const location = useLocation()
  const navigate=useNavigate()
  const endpoint333= "http://localhost:3500/users/wallets"
  const endpoint344= "http://localhost:3500/users/getwallets"
  useEffect(() => {
    setuserIdentification(location.state.userIdentification)
    settransferpin(location.state.transferpin)
    console.log(transferpin, userIdentification)
    getWalletdata()
  }, [userIdentification, transferpin])
  const createWallet =()=>{
    let walletObj={walletname,walletdescription,targetamount,userIdentification};
    axios.post(endpoint333,walletObj).then((result)=>{
      console.log(result)
      navigate("/dashboard",{state:{user_id:userIdentification}})
    })
    
  }
  const getWalletdata=()=>{
    let getWallet={userIdentification};
    axios.post(endpoint344,getWallet).then((result)=>{
      console.log(result)
      setfundHistory(result.data)
      // setnewfundHistory(fundHistory.reverse())
      // console.log(newfundHistory)
    }).catch((err)=>{
      console.log(err)
  })
  }
  return (
    <>
      <div className='container-div'>
        <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" state={{ user_id: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon1} alt="" width={20} /> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon2} alt="" width={20} /> Fund account</Link></li>
            <li><Link to="/transfer" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon3} alt="" width={20} /> Transfer</Link></li>
            <li><Link to="/wallet" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><div className='active-one btn'><img src={icon4} alt="" width={20} /> Wallet</div></Link></li>
            <li><Link to="/history" state={{ userIdentification: userIdentification, transferpin: transferpin }} className='side-nav-link'><img src={icon5} alt="" width={20} /> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20} /> Quick transaction</Link></li>
          </ul>
        </div>
        <div className='middle-body'>
          <h1 className='text-center mt-3'>Wallets</h1>

          <button type="button" className="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Create a new wallet
          </button>
          <button type="button" className="btn btn-primary" style={{display:"none"}} onClick={getWalletdata}>Wallets</button>
          {
            fundHistory==""?<center><h1>No available wallet</h1></center>:
            fundHistory.map((wallet,index)=>(
              <div className='wallet-general-div'>
                  
              </div>
            ))
          }
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                 <input type="text" placeholder='Wallet name' className='form-control mb-3' onChange={(e)=>setwalletname(e.target.value)}/>
                 <input type="text" placeholder='Wallet description' className='form-control mb-3' onChange={(e)=>setwalletdescription(e.target.value)}/>
                 <input type="text" placeholder='Target amount' className='form-control mb-3' onChange={(e)=>settargetamount(e.target.value)}/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createWallet}>Wallets</button>
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