import React from 'react'
import './App.css';
import chip from '../Media/qr.png';

export default function Main() {

  return (
    <div className='Main'>
      <div className="overlay"></div>

      <div className='card-header'>
        <img src = {chip} alt='chip' id="chip"/>>
       <p id="portfolio"> PORTFOLIO</p>
      </div>

      <div className='Middle_layer'>
          <p>E-mail/Phone-no</p>
          <h4>durgaprasadpilli02@gmail.com/8639981992</h4>
      </div>

      <div className='footer'>
        <div id='name'>
          <p>Card-Name</p>
          <h4>PILLI DURGA PRASAD</h4>
          </div>
        <div id='dateobirth'>
          <p>DOB</p>
          <h4>09/10/2003</h4>
        </div>
      </div>
    </div>
  )
}
