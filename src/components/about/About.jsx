import React from 'react'
import './About.css'
import christo from '../../assets/hongkong.webp'

const About = () => {
  return (
    <div className='about'>     
      <div className="about-left">
        <img src={christo} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h2>ABOUT US</h2>
        <h3>Making memories</h3>
        <p>We are a travel agency delivering incomparable services to our clients by organizing travels all around the world,
          from the towering Christ the Redeemer of Rio de Janeiro to the Buddha Statue in Hong Kong, with unbeatable rates,
          making memories for you and your loved ones as you travel the world.
        </p>
      </div>
    </div>
  )
}

export default About
