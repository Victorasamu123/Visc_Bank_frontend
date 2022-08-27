import React from 'react'
import "../styles/Home.css"
import img from "../images/image-removebg-preview.png"
const Home = () => {
  return (
    <>
      <div className='div-text'>
        <h1>
          Make your <br />
          transactions even <br />
          easier with Visc
        </h1>
        <div className='mini-text'>
          We're here to help you get the best out of your<br />
          money,no strings attached. <br />
          Welcome to your freedom
        </div>
        <button className='btn mt-3'>
          Sign up
        </button>
        <button className='btn ms-3 mt-3'>
          Sign in
        </button>
        <div>
          <img src={img} alt="" width={750} className="img-div" />
        </div>
      </div>
      <div className='big-boy'>
      <div className='second-div'>
        <h1>
          Why choose Visc bank?
        </h1>
        <div className='mini-text'>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before
        </div>
        <div className='row mt-5'>
          <div className='col-3 shadow-sm card'>
            <h5 className='text-center card-header'>Bank of the free</h5>
            <div className='card-body'>
             <p className='card-text'>
             We’re serious about free banking, <br />
             and we will never, ever charge you <br /> 
             for anything without your consent.
             </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home