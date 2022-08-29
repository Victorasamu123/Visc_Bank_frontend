import axios from "axios"
import "../styles/DashBoard.css"
import img3 from "../images/IMG_2145.jpg"
import img4 from "../images/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.webp"
import {Link} from "react-router-dom"
import { useEffect } from "react"
const DashBoard = () => {
  const endpoint3="http://localhost:3500/users/dashboard"
  // useEffect(() => {
    
    
  // }, []);
  // const cccc=()=>{
  //   axios.get(endpoint3).then((result)=>{
  //     console.log(result);
  //   });
  // }
  return (
    <>
    <div className="dashboard-section">
      <div className="side-navbar-div">
        <ul className="side-navbar-ul">
            <li className="side-navbar-li mb-3"><Link to="/dashboard" className="link-tab btn" id="li-active">Dashboard</Link></li>
            <li className="side-navbar-li mb-3"><Link to="/deposits" className="link-tab i">Deposits</Link></li>
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
        <div className="income shadow-lg">

        </div>
        <div className="current-balance2 shadow-lg">

        </div>
       </div>
      </div>
      <div className="side-navbar-div3">
        <div>
          <center>
            {/* <input type="file" className="file form-control"/> */}
            <img src={img3} alt=""width={80} height={80} className="img3"/>
            <p className="text-light mt-3">Asamu Victor</p>
          </center>
        </div>
        <div>
          <h6 className="text-light ms-4">Expance Details</h6>
          <div className="d-flex">
            <p className="ms-4 text-light">Items</p>
            <p className="ms-4 ">Payments</p>
            <p className="ms-4 ">Reviews</p>
          </div>
          <div>
            <img src={img4} alt="" width={30} height={30}/>
          </div>
        </div>

      {/* <button className="btn btn-info" onClick={cccc}>cccccc</button> */}
      </div>

    </div>
    </>
  )
}

export default DashBoard;