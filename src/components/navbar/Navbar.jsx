import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import menu from '../../assets/menu.svg'

const Navbar = () => {

  const [lucent, setLucent]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setLucent(true):setLucent(false);
    })
  },[])

  const [mobileMenu, setMobileMenu]=useState(false);
    const toggleMenu=()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

  return (
    <nav className={`container ${lucent?'trans-nav':''}`}>
      <h1 className='logo'>The Website</h1>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='home' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-80}>About</Link></li>
        <li><Link to='destinations' smooth={true} duration={500} offset={-200}>Destinations</Link></li>
        <li><Link to='testimonials' smooth={true} duration={500} offset={-200}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} duration={500} offset={0}>Contact Us</Link></li>
      </ul>
      {/* <img src={menu} alt="" className='menu' onClick={toggleMenu}/> */}
    </nav>
  )
}

export default Navbar
 