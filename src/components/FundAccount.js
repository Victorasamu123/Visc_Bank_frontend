import React, { useEffect, useState } from 'react'
import { useLocation,Link, useNavigate } from 'react-router-dom'
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
import axios from 'axios'
const FundAccount = () => {
    const [userIdentification, setuserIdentification] = useState("")
    const [transferpin, settransferpin] = useState("")
    const [accountname, setaccountname] = useState("")
    const [accountnumber, setaccountnumber] = useState("")
    const [amount, setamount] = useState("")
    const [amount, setamount] = useState("")
    const [transferpin2, settransferpin2] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const endpoint99 = "http://localhost:3500/users/fund"
    useEffect(() => {
     setuserIdentification(location.state.userIdentification)
     settransferpin(location.state.transferpin)
     console.log(transferpin,userIdentification)
    }, [userIdentification,transferpin]);
    const fundit =()=>{
       if (accountname==""||accountnumber==""||amount==""||transferpin2=="") {
        console.log("enter correct informatiion")
       } else {
        if (transferpin2!==transferpin) {
            console.log("invalid pin")
        } else {
            let fundDetails={userIdentification,accountname,accountnumber,amount}
            axios.post(endpoint99,fundDetails).then((result)=>{
                console.log(result)
              }).catch((err)=>{
                console.log(err);
              })
              navigate("/dashboard",{state:{user_id:userIdentification}})
        }
       }
    }
  return (
    <>
      <div className='container-div'>
         <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" state={{user_id:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon1} alt="" width={20}/> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{user_id:userIdentification,transferpin:transferpin}} className='side-nav-link'><div className='active-one btn'><img src={icon2} alt="" width={20}/> Fund account</div></Link></li>
            <li><Link to="/transfer" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon3} alt="" width={20}/> Transfer</Link></li>
            <li><Link to="/wallet" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon4} alt="" width={20}/> Wallet</Link></li>
            <li><Link to="/history" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon5} alt="" width={20}/> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20}/> Quick transaction</Link></li>
          </ul>
         </div>
         <div className='middle-body'>
         <nav className="navbar navbar-expand-lg mt-5">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/dashboard" state={{user_id:userIdentification,transferpin:transferpin}} className="side-nav-link">
                  <img src={icon1} alt="" width={20} /> Dashboard
              </Link>
                </li>
                <li className="nav-item">
                <Link
                to="/fundaccount"
                state={{
                  userIdentification: userIdentification,
                  transferpin: transferpin,
                }}
                className="side-nav-link"
              >
                <img src={icon2} alt="" width={20} /> Fund account
              </Link>
                </li>
                <li className="nav-item">
                <Link
                to="/transfer"
                state={{
                  userIdentification: userIdentification,
                  transferpin: transferpin,
                }}
                className="side-nav-link"
              >
                <img src={icon3} alt="" width={20} /> Transfer
              </Link>
                </li>
                <li className="nav-item">
                <Link
                to="/wallet"
                state={{
                  userIdentification: userIdentification,
                  transferpin: transferpin,
                }}
                className="side-nav-link"
              >
                <img src={icon4} alt="" width={20} /> Wallet
              </Link>
                </li>
                <li className="nav-item">
                <Link
                to="/history"
                state={{
                  userIdentification: userIdentification,
                  transferpin: transferpin,
                }}
                className="side-nav-link"
              >
                <img src={icon5} alt="" width={20} /> Transaction history
              </Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="side-nav-link">
                <img src={icon6} alt="" width={20} /> sign out
              </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="lolo">Visc Bank</div>
           <center>
            <h1 className="mt-5">Fund Account</h1>
            <input type="text" className='input-area' placeholder='account name' onChange={(e)=>setaccountname(e.target.value)}/>
            <input type="text" className='input-area' placeholder='account number' onChange={(e)=>setaccountnumber(e.target.value)}/>
            <input type="text" className='input-area' placeholder='amount to deposits' onChange={(e)=>setamount(e.target.value)}/>
            <input type="text" className='input-area' placeholder='transfer pin' onChange={(e)=>settransferpin2(e.target.value)}/>
            <button className='btn btn-primary' onClick={fundit}>Fund</button>
           </center>
         </div>
       </div>
    </>
  )
}

export default FundAccount