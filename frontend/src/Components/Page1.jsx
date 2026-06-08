import React from 'react'
import './Page1.css'
import secondimg from '../assets/secondimg.png'

function Page1() {
  return (
    // <div id='body'>
        
    //     <img src={secondimg} alt="" />
        

    //         <p className='body-text'> CONTENT </p> 
    //         <p className='body-text'>Stripping away the superfluous.</p>
    //         <p className='body-text'  >
    //           we view fashion throw the lens of architecture.
    //           every seam is a foundation,every fold a 
    //           delibrate shadow.the winter monolith explores 
    //           the tension between soft heritage wools and 
    //           sharp, geometric tailoring.
    //         </p>
    //         <p> DISCOVER THE PHILOSOF </p>
        
       
    // </div>
    
      <section id='Page1'>
        <div >
          <img src={secondimg} alt="" />
        </div>

        <ul id='summarysection'>

         <li id='lineone'> CONTENT </li> 
         <li id='linetwo'><h1>Stripping away the superfluous.</h1></li>
         <li id='linethree'>we view fashion throw the lens of architecture.every seam is a foundation,every fold a delibrate shadow.the winter monolith explores the tension between soft heritage wools and sharp, geometric tailoring.</li>
         <li id='linefour'> DISCOVER THE PHILOSOFY <i class="bi bi-arrow-right"></i></li>
        </ul>
      </section>
  
  )
}

export default Page1