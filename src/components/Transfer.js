import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Transfer.css"
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
const Transfer = () => {
    const [userIdentification, setuserIdentification] = useState("")
    const [receiverAcccoutName, setreceiverAcccoutName] = useState("")
    const [receiverAccountNumber, setreceiverAccountNumber] = useState("")
    const [amountTransfering, setamountTransfering] = useState("")
    const [bankName, setbankName] = useState("")
    const [transferpin, settransferpin] = useState("")
    const [transferpin3, settransferpin3] = useState("")
    const [errorMessage, seterrorMessage] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const endpoint101 = "https://visc-bank.herokuapp.com/users/transfer"
    useEffect(() => {
      console.log(location.state)
      setuserIdentification(location.state.userIdentification)
      settransferpin(location.state.transferpin)
      console.log(userIdentification,transferpin)
    }, [userIdentification])
    const transfer=()=>{
        if (receiverAcccoutName==""||receiverAccountNumber==""||amountTransfering==""||transferpin3=="") {
            console.log("enter correct informatiion");
            seterrorMessage("invaid input")
           } else {
            if (transferpin3!==transferpin) {
                seterrorMessage("invalid pin")
            } else {
                let transferDetails={userIdentification,receiverAcccoutName,receiverAccountNumber,amountTransfering,bankName}
                axios.post(endpoint101,transferDetails).then((result)=>{
                    console.log(result)
                }).catch((err)=>{
                    console.log(err);
                })
                navigate("/dashboard",{state:{user_id:userIdentification}})
            }
           }
    }
    return(
  <>
    <div className='container-div'>
         <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" state={{user_id:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon1} alt="" width={20}/> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{userIdentification:userIdentification,transferpin:transferpin}}  className='side-nav-link'><img src={icon2} alt="" width={20}/> Fund account</Link></li>
            <li><Link to="/transfer" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><div className='active-one btn'><img src={icon3} alt="" width={20}/> Transfer</div></Link></li>
            <li><Link to="/wallet" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon4} alt="" width={20}/> Wallet</Link></li>
            <li><Link to="/history" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon5} alt="" width={20}/> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20}/>Sign out</Link></li>
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
            {
                errorMessage==""? <div></div>: <div className="alert alert-danger">{errorMessage}</div>
            }
            <h1 className="mt-5">Transfer Fund</h1>
            <input type="text" className='input-area' placeholder='Receiver name' onChange={(e)=>setreceiverAcccoutName(e.target.value)}/>
            <input type="text" className='input-area' placeholder='receiver account number' onChange={(e)=>setreceiverAccountNumber(e.target.value)}/>
            <input type="text" className='input-area' placeholder='amount to transfer' onChange={(e)=>setamountTransfering(e.target.value)}/>
            <input type="text" className='input-area' placeholder='Receiver bank' onChange={(e)=>setbankName(e.target.value)}/>
            <input type="text" className='input-area' placeholder='transfer pin' onChange={(e)=>settransferpin3(e.target.value)}/>
            <button className='btn btn-primary' onClick={transfer}>Transfer</button>
           </center>
         </div>
       </div>
  </>
    )
}

export default Transfer;