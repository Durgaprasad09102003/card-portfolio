import React from 'react'
import './App.css';
import Ln from '../Media/linkedin.svg';
import In from '../Media/instagram.svg';
import gh from '../Media/github-icon-2.svg';
import resumeicon from '../Media/resume.png';
import resume from '../Media/DURGAPRASAD PILLI.pdf';


export default function Backside() {
  return (
    <div className='back'>
        <div className="overlay"></div>

        <div className='card-header'>
          <a href={resume} target="_blank" rel="noopener noreferrer" id="resumelink">
          <h3>Resume</h3><img src={resumeicon} alt="" id="resumepic"/>
            
          </a>
          <p id="portfolio"> PORTFOLIO</p>
        </div>

        <div className='Middle_layer'>
          <p id="addr">57-11-05/1, Subhash nagar, Kancharapalem,</p>
          <p id="addr">Visakhapatnam, 530008,</p>
          <p id="addr">Andhra Pradesh, India.</p>
        </div>

        <div className='footer'>
        <div id='name'>
          <p>Card-Name</p>
          <h4>PILLI DURGA PRASAD</h4>
          </div>
        <div id='media'>
          <p>Social-Media</p>
          <div id='media-icons'>
          <a href="https://www.linkedin.com/in/durga-prasad-pilli-a1056329b/" target="_blank" rel="noopener noreferrer"><img src={Ln} alt='Ln' id='ln'/></a>
          <a href="https://github.com/Durgaprasad09102003" target="_blank" rel="noopener noreferrer"> <img src={gh} alt='gh' /> </a>
          <a href="https://www.instagram.com/digital_pulse_offical?igsh=MWd6YmxnY3k4YjRxag==" target="_blank" rel="noopener noreferrer"> <img src={In} alt='In' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
