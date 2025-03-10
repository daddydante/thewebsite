import React, { useEffect, useState } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

  const [lucent, setLucent]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setLucent(true):setLucent(false);
    })
  },[])


  return (
    <nav className={`container ${lucent?'trans-nav':''}`}>
      <RouterLink to='/' className='logo'><h1>The Website Tours</h1></RouterLink> 
      <ul>
        <li><ScrollLink to='home' smooth={true} duration={500} offset={0}>Home</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} duration={500} offset={-80}>About</ScrollLink></li>
        <li><ScrollLink to='destinations' smooth={true} duration={500} offset={-200}>Destinations</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} duration={500} offset={-200}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} duration={500} offset={0}>Contact Us</ScrollLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
 