import React from 'react'
import './Header.css'
import firstimg from '../assets/firstimg.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <div>
       <div id='head'>
        <a className='menu' href="#">COLLECTIONS</a> 
        <a className='menu' href="#">EDITORIAL</a>
        <a className='menu' href="#">BESPOKE</a> 
        <a className='menu' href="#">HERITAGE</a>
        <i class="bi bi-search"></i>
        <i class="bi bi-bag"></i>
        <button id='shop-now'> <span>SHOP NOW</span></button>
        </div>
        <img id='firstimg' src={firstimg} alt='logo'/>    
    </div>
  )
}

export default Header