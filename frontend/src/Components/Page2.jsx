import React from 'react'
import './Page2.css'
import product1 from  '../assets/Frame 1.png'
import product2 from  '../assets/Frame 2.png'
import product3 from  '../assets/Frame 3.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Page2() {
  return (


    // <div id='secondbody'>
    //     <div>Essential Selection</div>

    //     <div id='secondmenu'>
    //     <a href="#">ALL OBJECTS</a>
    //     <a href="#">OUTERWEAR</a>
    //     <a href="#">ACCESSORIES</a>
        
    //     </div>

    //     <div id='secondpageimages'>
    //     <img src={product1} alt="" />
    //     <img src={product2} alt="" />
    //     <img src={product3} alt="" />
    //     </div>
    // </div>
    <div id='page2'>
      <section id='headings'>
        <h1>Essential Selection</h1>
        <ul id='menus'>
          <li>ALL OBJECTS</li>
          <li>OUTERWEAR</li>
          <li>ACCESSORIES</li>
        </ul> 
      </section>

      <section id='allproducts'>

        <div className="card" >
            <img src={product1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">ONYX STRUCTURAL OVERCOAT <span className='price'>$2450</span></h5> 
            <p className="card-text">PURE WOOL / SLATE</p>
          </div>
        </div>

        <div className="card" >
           <img src={product2} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">SCULPTED CALFSKIN TOTE <span className='price'>$2450</span></h5> 
           <p className="card-text">HAND-STITCHED / NOIR</p>
         </div>
       </div>

      <div className="card" >
          <img src={product3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">CHELSEA SILHOUETTE II <span className='price'>$2450</span></h5> 
          <p className="card-text">MATTE LEATHER / ESPRESSO</p>
        </div>
      </div>

      </section>
    </div>
  )
}

export default Page2