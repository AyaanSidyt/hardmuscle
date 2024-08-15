import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>Learn More About Us</h1>
        <p>We have the most talented and the bestest trainers to train you and make you more Fit than before,The environment is too much neat and clean</p>
      <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About 
