import React from 'react'
import './Secondbody.css'
import product1 from  '/src/assets/product 1.png'
import product2 from  '/src/assets/product 2.png'
import product3 from  '/src/assets/product 3.png'

function Secondbody() {
  return (


    <div id='secondbody'>
        <div>Essential Selection</div>

        <div id='secondmenu'>
        <a href="#">ALL OBJECTS</a>
        <a href="#">OUTERWEAR</a>
        <a href="#">ACCESSORIES</a>
        
        </div>

        <div id='secondpageimages'>
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        </div>
    </div>
  )
}

export default Secondbody