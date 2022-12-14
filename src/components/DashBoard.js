import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/DashBoard.css";
import icon1 from "../images/dashboard_customize_FILL1_wght200_GRAD0_opsz48.svg";
import icon2 from "../images/paid_FILL0_wght200_GRAD0_opsz48.svg";
import icon3 from "../images/receipt_long_FILL0_wght200_GRAD0_opsz48.svg";
import icon4 from "../images/wallet_FILL0_wght200_GRAD0_opsz48.svg";
import icon5 from "../images/payments_FILL0_wght200_GRAD0_opsz48.svg";
import icon6 from "../images/account_balance_wallet_FILL0_wght200_GRAD0_opsz48.svg";
import icon7 from "../images/search-outline.svg";
import icon8 from "../images/images-removebg-preview.png";
import icon9 from "../images/008-credit-card.svg";
import icon10 from "../images/020-money-bag.svg";
import icon11 from "../images/035-wallet-1.svg";
import icon12 from "../images/002-bank.svg";
import icon13 from "../images/download__1_-removebg-preview.png";
import icon14 from "../images/download-removebg-preview (3).png";
import icon15 from "../images/photo.png";
import icon77 from "../images/menu_open_FILL0_wght200_GRAD0_opsz48.svg"
const DashBoard = () => {
  const [userIdentification, setuserIdentification] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [transferpin, settransferpin] = useState("");
  const [initialbalance, setinitialbalance] = useState("");
  const [fundHistory, setfundHistory] = useState([]);
  const [newfundHistory, setnewfundHistory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const endpoint22 = "https://visc-bank.herokuapp.com/users/dashboard";
  const endpoint201 = "https://visc-bank.herokuapp.com/users/history";
  useEffect(() => {
    console.log(location.state.user_id);
    setuserIdentification(location.state.user_id);
    console.log(userIdentification);
    let userVerrification = { userIdentification };
    axios
      .post(endpoint22, userVerrification)
      .then((result) => {
        console.log(result);
        setinitialbalance(result.data.initialbalance);
        console.log(initialbalance);
        setaccountnumber(result.data.accountnumber);
        setfirstname(result.data.firstname);
        setlastname(result.data.lastname);
        settransferpin(result.data.transferpin);
      })
      .catch((err) => {
        console.log(err);
      });
    getFund();
  }, [
    userIdentification,
    firstname,
    lastname,
    accountnumber,
    transferpin,
    initialbalance,
  ]);
  const getFund = () => {
    let fundOject = { userIdentification };
    axios
      .post(endpoint201, fundOject)
      .then((result) => {
        console.log(result.data);
        console.log(result.data);
        setfundHistory(result.data);
        setnewfundHistory(result.data.reverse());
        console.log(newfundHistory);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button
        className="btn btn-info me-3"
        onClick={getFund}
        style={{ display: "none" }}
      >
        Funds History
      </button>
      <div className="container-div">
        <div className="side-navbar">
          <h6 className="bank-name">Visc Bank</h6>
          <ul className="mt-5">
            <li>
              <Link to="/dashboard" className="side-nav-link">
                <div className="active-one btn">
                  <img src={icon1} alt="" width={20} /> Dashboard
                </div>
              </Link>
            </li>
            <li>
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
            <li>
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
            <li>
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
            <li>
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
            <li>
              <Link to="/" className="side-nav-link">
                <img src={icon6} alt="" width={20} />
                Sign out
              </Link>
            </li>
          </ul>
        </div>
        <div className="middle-body">
          <nav className="navbar navbar-expand-lg mt-5">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={icon77} alt="" width={30}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/dashboard" className="side-nav-link">
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
          <div className="search-div">
            <img src={icon7} alt="" width={20} className="ms-4" />
          </div>
          <div className="username-div">
            Welcome,{lastname} {firstname}{" "}
            <button
              type="button"
              className="btn btn-primary bbb"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src={icon15} alt="" width={20} height={20} />
            </button>
          </div>
          <div className="current-balance-div">
            <h6 className="current-balance-text pt-3 ms-3">Current Balance</h6>
            <div className="master-card">
              <img src={icon8} alt="" width={35} />
            </div>
            <div className="amount-text pt-2 ms-3">${initialbalance}</div>
            <div className="account-number mt-5 pt-3 ms-3">{accountnumber}</div>
          </div>
          <div className="basic-transactions" id="basic-transactions-id">
            <div className="fund-acct me-4">
              <center>
                <img src={icon9} alt="" width={50} />
                <br />
                <Link
                  to="/fundaccount"
                  state={{
                    userIdentification: userIdentification,
                    transferpin: transferpin,
                  }}
                  className="basic-transactions-link"
                >
                  Fund account
                </Link>
              </center>
            </div>
            <div className="fund-acct2 me-4">
              <center>
                <img src={icon10} alt="" width={50} />
                <br />
                <Link
                  to="/transfer"
                  state={{
                    userIdentification: userIdentification,
                    transferpin: transferpin,
                  }}
                  className="basic-transactions-link"
                >
                  Transfer
                </Link>
              </center>
            </div>
            <div className="fund-acct3 me-4">
              <center>
                <img src={icon11} alt="" width={50} />
                <br />
                <Link
                  to="/wallet"
                  state={{
                    userIdentification: userIdentification,
                    transferpin: transferpin,
                  }}
                  className="basic-transactions-link"
                >
                  Wallet
                </Link>
              </center>
            </div>
            <div className="fund-acct4">
              <center>
                <img src={icon12} alt="" width={50} />
                <br />
                <Link
                  to="/history"
                  state={{
                    userIdentification: userIdentification,
                    transferpin: transferpin,
                  }}
                  className="basic-transactions-link"
                >
                  Transactions
                </Link>
              </center>
            </div>
          </div>
          <div className="bills-div">
            <div className="pay-bills-transsaction me-5">
              <center>
                <div className="fund-acct00 mt-5">
                  <center>
                    <img src={icon13} alt="" width={80} />
                    <br />
                    <Link
                      to="/history"
                      state={{
                        userIdentification: userIdentification,
                        transferpin: transferpin,
                      }}
                      className="basic-transactions-link"
                    ></Link>
                  </center>
                </div>
                <div className="fs-3">Pay bills</div>
              </center>
            </div>
            <div className="mobile-transaction">
              <center>
                <div className="fund-acct00 mt-5">
                  <center>
                    <img src={icon14} alt="" width={80} />
                    <br />
                    <Link
                      to="/transfer"
                      state={{
                        userIdentification: userIdentification,
                        transferpin: transferpin,
                      }}
                      className="basic-transactions-link"
                    ></Link>
                  </center>
                </div>
                <div className="fs-3">Mobile topup</div>
              </center>
            </div>
          </div>
          <div className="recent-transactions">
            <center>
              <h3>Recent Transactions</h3>
              <Link
                to="/transfer"
                className="liiii"
                state={{
                  userIdentification: userIdentification,
                  transferpin: transferpin,
                }}
              >
                See all transactions
              </Link>
            </center>
            {newfundHistory == "" ? (
              <h3 className="text-center">No history</h3>
            ) : (
              newfundHistory.map((his, index) => (
                <div className="his-con">
                  <div className="mt-2 ms-3 das-nm">{his.accountname}</div>
                  <div className="das-num">{his.accountnumber}</div>
                  <div className="das-amt">+{his.amount}</div>
                </div>
              ))
            )}
          </div>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Account's info
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="fs-4">1. Surname: {firstname}</div>
                  <div className="fs-4">2. othername: {lastname}</div>
                  <div className="fs-4">3. Accountname: {accountnumber}</div>
                  <div className="fs-4">3. user_id: {userIdentification}</div>
                  <div className="fs-4">
                    3. BVN: {Math.floor(Math.random() * 10000000000)}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export
export default DashBoard;
