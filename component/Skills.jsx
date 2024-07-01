import React from 'react'
import '../Style/Skills.css'
import PhoneImg from '../src/assets/freemobile.svg'
import CloudImg from '../src/assets/Cloud.svg'
import TagImg from '../src/assets/tag 1.svg'
import TestingImg from '../src/assets/TestingD.svg'

const Skills = () => {
  return (
    <>
<main className='container mt-5 d-none d-lg-block'>  
<p className='mt-4 card-text'> My Skills </p>
<h1 className='card-text'> My Expertise </h1>
<section className='d-flex gap-5 mt-4'> 

{/* first */}
<div className="card p-3 card1">
              <img src={PhoneImg} style={{ width: '3rem' }} alt="mobile-icon"  />
              <div>
                <h4 className="">Responsive Design</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>
{/* Tag card */}
<div className="card p-3 card2">
              <img src={TagImg} style={{ width: '3rem' }}  alt="tag-icon" />
              <div>
                <h4 className="card-h4">Front-End Frameworks</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>

{/* Testing card */}
<div className="card p-3 card3">
              <img src={TestingImg} style={{ width: '3rem' }} alt="Rotate-icon"/>
              <div>
                <h4 className="card-h4">Testing and Debugging</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>

  {/* Cloud Card */}
<div className="card p-3 card4">
              <img src={CloudImg} style={{ width: '3rem' }} alt="Bracket-icon" />
              <div>
                <h4 className="card-h4">Cloud Services</h4>
                <p className="card-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
  </div>
</section>

</main>

    </>
  )
}

export default Skills;