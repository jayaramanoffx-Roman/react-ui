import React from 'react'
import './Body.css'
import secondimg from '../assets/secondimg.png'

function Body() {
  return (
    <div id='body'>
        
        <img src={secondimg} alt="" />
        

            <p className='body-text'> CONTENT </p> 
            <p className='body-text'>Stripping away the superfluous.</p>
            <p className='body-text'  >
              we view fashion throw the lens of architecture.
              every seam is a foundation,every fold a 
              delibrate shadow.the winter monolith explores 
              the tension between soft heritage wools and 
              sharp, geometric tailoring.
            </p>
            <p> DISCOVER THE PHILOSOF </p>
        
       
    </div>
  )
}

export default Body