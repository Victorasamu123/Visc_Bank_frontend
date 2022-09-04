import React, { useEffect, useState } from 'react'
import { useLocation,Link, useNavigate } from 'react-router-dom'
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg"
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg"
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg"
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg"
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg"
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg"
import axios from 'axios'
import "../styles/History.css"
const History = () => {
    const [userIdentification, setuserIdentification] = useState("")
    const [transferpin, settransferpin] = useState("")
    const [accountfundname, setaccountfundname] = useState("")
    const [accountfundnumber, setaccountfundnumber] = useState("")
    const [fundamount, setfundamount] = useState("")
    const [fundHistory, setfundHistory] = useState([])
    const [newfundHistory, setnewfundHistory] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const endpoint201 = "http://localhost:3500/users/history"
    useEffect(() => {
        setuserIdentification(location.state.userIdentification)
        settransferpin(location.state.transferpin)
        console.log(transferpin,userIdentification)
        getFund()
    }, [transferpin,userIdentification]);
    const getFund=()=>{
        let fundOject={userIdentification}
        axios.post(endpoint201,fundOject).then((result)=>{
            console.log(result.data)
            console.log(result.data)
            setfundHistory(result.data)
            console.log(fundHistory);
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
            <li><Link to="/dashboard" state={{user_id:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon1} alt="" width={20}/> Dashboard</Link></li>
            <li><Link to="/fundaccount" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><div className='active-one'><img src={icon2} alt="" width={20}/> Fund account</div></Link></li>
            <li><Link to="/transfer" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon3} alt="" width={20}/> Transfer</Link></li>
            <li><Link to="/wallet" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon4} alt="" width={20}/> Wallet</Link></li>
            <li><Link to="/history" state={{userIdentification:userIdentification,transferpin:transferpin}} className='side-nav-link'><img src={icon5} alt="" width={20}/> Transaction history</Link></li>
            <li><Link to="/" className='side-nav-link'><img src={icon6} alt="" width={20}/> Quick transaction</Link></li>
          </ul>
         </div>
         <div className='middle-body'>
          <center>
            <h1 className='mt-5 pt-3'>Funds Transactions History</h1>
            <div>
                <button className='btn btn-info me-3' onClick={getFund}>Funds History</button>
                <button className='btn btn-danger me-3'>Transfer History</button>
            </div>
          </center>
          <div className='carrier-div'>
                {fundHistory==""?<div></div>:
                    fundHistory.map((history,index)=>(
                        <div className='container-fluid'>
                         <div className="row">
                            <div className="col-lg-8 col-sm-12 mx-auto">
                                <div className='card shadow'>
                                    <div>{history.accountname}</div>
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

export default History;