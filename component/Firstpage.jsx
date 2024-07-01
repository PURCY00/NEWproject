import React from 'react'
import FirstImg from "../src/assets/firstimg.svg"
import '../Style/Firstpage.css'

const Firstpage = () => {
  return (
    <>
<section className="bg-light Hero">
      <div className="container">
        <div className="row align-items-center px-1 mx-1 ">
          <div className="col-md-5 align-items-start text-md-left">
            <p>Hey, I am John</p>
            <h1>I develop dynamic and 
            <h1>user-centered Web </h1> 
            <h1>Applications </h1></h1>
            <h5 className='Front'>My expertise spans both front-end and back-end development, 
            <h5> enabling me to build comprehensive solutions that meet diverse </h5> client needs.</h5>
            <br /> <br />
            <button className="btn1 rounded btn-primary"> Get in Touch
            </button>
          </div>
          <div className="col-md-6">
            <img src={FirstImg} alt="John's Profile" className="img-fluid" />
          </div>
        </div>
      </div>
</section>

    
    
    </>
  )
}

export default Firstpage