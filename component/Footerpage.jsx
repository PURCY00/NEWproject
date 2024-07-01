import React from 'react'
import { Icon } from "@iconify/react";
import { Navbar, Nav } from 'react-bootstrap'; 
import Navlogo from "../src/assets/logo.svg";
import '../Style/Footerpage.css'



const Footerpage = () => {
  return (
    <>
        <Navbar expand="" className="Footer container" >
      <Navbar.Brand className='flex-grow-1' href="#">
        <img src={Navlogo} alt="Logo" height="30" />
        <span className='fs-6'> JohnDev,</span>
      </Navbar.Brand>
      {/* Div for my footer  */}
      <div>
      <Navbar id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio</Nav.Link>
          <Nav.Link href="#" className="mx-2">About me</Nav.Link>
          <Nav.Link href="#" className="mx-2">Contact</Nav.Link>
          <Nav.Link href="#" className="mx-2">Testimonials</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio </Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-center">
        <Nav.Link href="#" className="p-2">

            {/*Footer icons */}
           <div className='d-flex text-dark justify-content-space-between gap-3'>
            <div>
           <Icon icon="fa6-brands:facebook-f"/>
            </div>

            <div>
           <Icon icon="teenyicons:instagram-outline"/>
            </div>

            <div>
           <Icon icon="mingcute:twitter-fill" />
            </div>

            <div>
           <Icon icon="mdi:linkedin"/>
            </div>
           </div>
          </Nav.Link>
        </Nav>
      </Navbar>
      </div>
    </Navbar>
    <div className='container'>
    <hr />
    <div className='m-5 mr-auto justify-content-space-between p-2 align-items-center d-flex'>
          <Nav.Link href="#" className="mx-2 text-dark">Privacy policy</Nav.Link>
          <Nav.Link href="#" className="mx-2 text-dark">Terms of service</Nav.Link>
          <Nav.Link href="#" className="mx-2 text-dark">Cookies Settings</Nav.Link>
    </div>

    </div>
    {/* last */}
   
      
    </>
  )
}

export default Footerpage