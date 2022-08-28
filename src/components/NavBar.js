import React from 'react'
import logo from '../images/images-removebg-preview.png'
import "../styles/NavBar.css"
import {Link} from "react-router-dom"
const endpoint="http://localhost:3500/users/signup"
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top" id='nav'>
        <div className="container-fluid text-light">
          <a className="navbar-brand text-light ms-5 " href="#">
            <span className='span'>Visc</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-light" href="#">Contact us</a>
              </li>
              <li className="nav-item dropdown me-5">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='me-3 nav-item'>
          <div className='me-5 pe-5'>
          <div className='button me-5'>
            Get Visc
          </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;