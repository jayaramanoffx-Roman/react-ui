import React from 'react'
import './Page4.css'
import pillar1 from '../assets/pillar1.png'
import pillar2 from '../assets/pillar2.png'
import pillar3 from '../assets/pillar3.png'

function Page4() {
  return (
    <div id='page4'>
        <div id='head'>
           <h1> Precision in Process </h1> 
           <p>Three Pillars Of Craftsmanship</p>
        </div>

              <section id='threepillars'>
        
                <div className="pillarscard" >
                    <img src={pillar1} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h1 className='card-number'>01</h1>
                    <h5 className="card-title">NOBLE SELECTION </h5> 
                    <p className="card-text">Sourcing raw fibers from heritage mills that prioritize preservation and tactile depth.</p>
                  </div>
                </div>
        
                <div className="pillarscard" >
                   <img src={pillar2} className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h1 className='card-number'>02</h1>
                   <h5 className="card-title">ARCHITECTURAL CUT </h5> 
                   <p className="card-text">Drafting Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam?</p>
                 </div>
               </div>
        
              <div className="pillarscard" >
                  <img src={pillar3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className='card-number'>03</h1>
                  <h5 className="card-title">REFINED ASSEMBLY</h5> 
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quae!</p>
                </div>
              </div>
        
              </section>
    </div>
  )
}

export default Page4