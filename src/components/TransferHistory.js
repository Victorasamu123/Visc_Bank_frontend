import React, { useEffect, useState } from 'react'
import { useLocation,Link, useNavigate } from 'react-router-dom'
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
import axios from 'axios'
import "../styles/History2.css"


const TransferHistory = () => {
    const [userIdentification, setuserIdentification] = useState("")
    const [transferpin, settransferpin] = useState("")
    const [accountfundname, setaccountfundname] = useState("")
    const [accountfundnumber, setaccountfundnumber] = useState("")
    const [fundamount, setfundamount] = useState("")
    const [transferHistory, settransferHistory] = useState([])
    const [newfundHistory, setnewfundHistory] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const endpoint303 = "https://visc-bank.herokuapp.com/users/transferhistory"
    useEffect(() => {
        setuserIdentification(location.state.userIdentification)
        settransferpin(location.state.transferpin)
        console.log(transferpin,userIdentification)
        getTransfer()
    }, [transferpin,userIdentification]);
    const getTransfer=()=>{
        let transferOject={userIdentification}
        axios.post(endpoint303,transferOject).then((result)=>{
            console.log(result.data)
            console.log(result.data)
            settransferHistory(result.data.reverse())
            console.log(transferHistory);
        }).catch((err)=>{
            console.log(err)
        })
      }
      const goToFund=()=>{
        navigate("/history",{state:{userIdentification:userIdentification,transferpin:transferpin}})
      }
  return (
    <>
    <div className='container-div'>
         <div className='side-navbar'>
          <h6 className='bank-name'>Visc Bank</h6>
          <ul className='mt-5'>
            <li><Link to="/dashboard" state={{user_id:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon1} alt="" width={20}/> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon2} alt="" width={20}/> Fund account</Link></li>
            <li><Link to="/transfer" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon3} alt="" width={20}/> Transfer</Link></li>
            <li><Link to="/wallet" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon4} alt="" width={20}/> Wallet</Link></li>
            <li><Link to="/history" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><div className='active-one'><img src={icon5} alt="" width={20}/> Transaction history</div></Link></li>
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
            <h1 className='mt-5 pt-3'>Funds Transactions History</h1>
            <div>
                <button className='btn btn-info me-3' onClick={goToFund}>Funds History</button>
                <button className='btn btn-danger me-3'  onClick={getTransfer}>Transfer History</button>
            </div>
          </center>
          <div className='carrier-div'>
                {transferHistory==""?<h1 className='text-center'>No transfer history</h1>:
                    transferHistory.map((historyss,index)=>(
                        <div className='container-fluid'>
                         <div className="row">
                            <div className="col-lg-8 col-sm-12 mx-auto">
                                <div className='card shadow-sm'>
                                    <span className='mt-2 ms-3 acct-nmt'>{historyss.receiverAcccoutName}</span>
                                    <span className='acct-numt'>{historyss.receiverAccountNumber}</span>
                                    <span className='acct-ambt'>{historyss.bankName}</span>
                                    <span className='acct-amtt'>+{historyss.amountTransfering}</span>
                                </div>
                            </div>
                         </div>
                        </div>
                    ))
                }
                </div>
         </div>
       </div>
       </>
  )
}

export default TransferHistory;