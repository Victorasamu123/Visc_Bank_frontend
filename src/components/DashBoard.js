import axios from "axios"
import "../styles/DashBoard.css"
import {Link} from "react-router-dom"
import { useEffect } from "react"
const DashBoard = () => {
  const endpoint3="http://localhost:3500/users/dashboard"
  useEffect(() => {
    
    
  }, []);
  const cccc=()=>{
    axios.get(endpoint3).then((result)=>{
      console.log(result);
    });
  }
  return (
    <>
    <div className="dashboard-section">
      <div className="side-navbar-div">
        <ul className="side-navbar-ul">
            <li className="side-navbar-li mb-3"><Link to="/dashboard" className="link-tab btn" id="li-active">Dashboard</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Deposits</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Transfer</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Wallet</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/" className="link-tab i">Transactions</Link></li>
        </ul>
      </div>
      <div className="side-navbar-div2">
       <div className="dashbord-display-text">
        <span className="dashbord-text">Dashboard</span>
        <div className="dashbord-input"><input type="text" className="dashbord-input shadow-sm" placeholder="Search"/></div>
       </div>
       <div className="general-balance">
       <div className="current-balance shadow-lg">
          <h6>Current balance</h6>
          <p>$150000</p>
          <p>6.34%</p>
       </div>
       <div className="current-balance shadow-lg">
          <h6>Monthly income</h6>
          <p>$150000</p>
          <p>9.04%</p>
       </div>
       <div className="current-balance shadow-lg">
          <h6>Monthly expenses</h6>
          <p>$8500</p>
          <p>2.34%</p>
       </div>
       </div>
       <div className="extra">
        <div className="income">

        </div>
       </div>
      </div>
      <div className="side-navbar-div3">

      <button className="btn btn-info" onClick={cccc}>cccccc</button>
      </div>

    </div>
    </>
  )
}

export default DashBoard;