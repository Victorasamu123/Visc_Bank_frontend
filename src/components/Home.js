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
      <div className='sec'>
        <h1>
          Why choose Visc bank?
        </h1>
      </div>
    </>
  )
}

export default Home