import React from 'react'
import './Page3.css'
import Page3img from '../assets/Page3img.png'

function Page3() {
  return (
    <div id='page3'>
        <div id='page3-content'>
        <ul>
            <li id='lineone'>THE ARCHIVE</li>
            <li id='linetwo'>Tactile Excellence.</li>
            <li id='linethree'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem commodi cumque saepe explicabo, assumenda excepturi corrupti molestiae eveniet quod consequatur incidunt nulla porro voluptatum consectetur maiores iusto tempore!</li>
            <li id='linefour'><button className='btn'>EXPLORE THE ATELIER</button></li>
        </ul>
        </div>

        <div id='page3-image'>
            <img src={Page3img} alt='' />
        </div>
    </div>
  )
}

export default Page3