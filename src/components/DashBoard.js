import axios from "axios"
import "../styles/DashBoard.css"
import {Link} from "react-router-dom"
const DashBoard = () => {
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

      </div>
      <div className="side-navbar-div3">

      </div>

    </div>
    </>
  )
}

export default DashBoard;