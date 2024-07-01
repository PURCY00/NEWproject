import React from 'react'
import '../Style/Portfolio.css'
import { Icon } from "@iconify/react";
import AhuseImg from '../src/assets/ahuse.svg'
import AppImg from '../src/assets/APP.svg'
import NnnImg from '../src/assets/nnn.svg'


const Portfolio = () => {
  return (
    <>
    <main className='container Hero mt-5 mb-5 d-none d-lg-block'> 
    <p>Recent Projects</p>

    {/* first portfolio layout */}
    <div className='d-flex justify-content-between'> 
    <h1>My Portfolio</h1>
    <button className='visit rounded'> <Icon icon="mdi:github"/> Visit My GitHub</button>
    </div>

    <section className='d-flex gap-5 mt-4'> 

{/* Ahuse Card */}
<div className="card p-3 card1">
              <img src={AhuseImg} style={{ width: 'auto' }} alt="ahuse-icon"  />
              <div>
                <h5 className=" mt-3 ">Ahuse</h5>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <button className='btn border-bottom  btn-light'> View Website ↗ </button>
              </div>
  </div>

  {/* App Card */}
<div className="card p-3 card1">
              <img src={AppImg} style={{ width: 'auto' }} alt="app-icon"  />
              <div>
                <h5 className=" mt-3">App Dashboard</h5>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <button className='btn border-bottom  btn-light'> View Project ↗ </button>
              </div>
  </div>

  {/*last card*/}
  <div className="card p-3 card1">
              <img src={NnnImg} style={{ width: 'auto' }} alt="Easy-icon"  />
              <div>
                <h5 className="mt-3">Easy Rent</h5>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <p>
                <button className='btn border-bottom  btn-light'> View Website ↗ </button>
                </p>
              </div>
  </div>
</section>
    </main>
                 
    
    </>
  )
}

export default Portfolio