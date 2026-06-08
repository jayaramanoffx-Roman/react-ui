import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div>
       {/* <div id='head'>
        <a className='menu' href="#">COLLECTIONS</a> 
        <a className='menu' href="#">EDITORIAL</a>
        <a className='menu' href="#">BESPOKE</a> 
        <a className='menu' href="#">HERITAGE</a>
        <i class="bi bi-search"></i>
        <i class="bi bi-bag"></i>
        <button id='shop-now'> <span>SHOP NOW</span></button>
        </div>
        <img id='firstimg' src={firstimg} alt='logo'/>     */}

        <header>
          <div id='logo'>
          <p>ELITE</p>
          </div>
          <ul id='menu'>
            <a href=""><li>COLLECTONS</li></a>
             <a href=""><li>EDITORIAL</li> </a>
             <a href=""><li>BESPOKE</li></a>
             <a href=""><li>HERITAGE</li></a>
          </ul>
          <div id='booticons'>
          <i class="bi bi-search"></i> <br />
          <i class="bi bi-bag"></i> <br />
          

          <button>Shop Now</button>
          </div>
        </header>
    </div>
  )
}

export default Header