import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div id='page7'>
        <section id='footer'>
            <ul className='footerul'>
                <li id='logo'>ELITE</li> <br />
                <div id='copyrights'>
                <li><i class="bi bi-c-circle"></i> 2024 ELITE LUXURY.</li>
                <li>BESPOKE TAILORING & EDITORIAL CRAFT.</li>
                <li>ALL RIGHTS RESERVED</li>
                </div>
            </ul>
            <ul className='footerul'>
                <li className='dark'>CLIENT SERVICE</li> <br />
                <li>SHIPPING & RETURNS</li>
                <li>PAYMENT INFORMATION</li>
                <li>TRACEABILITY</li>
            </ul>
            <ul className='footerul'>
                <li className='dark'>THE HOUSE</li> <br />
                <li>ATELIER HISTORY</li>
                <li>SUSTAINABILITY</li>
                <li>CAREERS</li>
            </ul>
            <ul className='footerul'>
                <li className='dark'>FOLLOW</li> <br />
                <div id='inpin'>
                    <li>INSTAGRAM</li>
                <li>PINTEREST</li>
                </div>
                
                <li  id='lastdark'>UNITED STATES (USD) <i class="bi bi-chevron-down"></i> </li>
            </ul>
        </section>
    </div>
  )
}

export default Footer