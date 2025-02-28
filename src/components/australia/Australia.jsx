import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Australia.css'
import { Link } from "react-router-dom";
// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import operahse from '../../assets/operahse.jpg'
import queenstown from '../../assets/queenstown.jpg'
import vanuatu from '../../assets/vanuatu.jpg'
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const Australia = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (  
    <div>
        <br/><br />
        <div className='americas'>
            <div className="intro">
            <h1>Australasia</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='item'>
                <img src={operahse} alt="" />
                <Carousel.Caption>
                  <h3>Be at liberty with the world around you</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={queenstown} alt=""/>
                <Carousel.Caption>
                  <h3>Experience the breathtaking might and marvel of nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={vanuatu} alt="" />
                <Carousel.Caption>
                  <h3>Have a glimpse of the ancient way of life</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>

            <h1>Top Destinations</h1>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header><h3>Sydney, Australia</h3></Accordion.Header>
                <Accordion.Body>
                Sydney, Australia’s coastal gem, dazzles with the Sydney Opera House and Harbour Bridge. Bondi Beach draws surfers,
                 while the vibrant city blends urban life with natural beauty. From the Royal Botanic Garden to bustling markets,
                  Sydney offers a laid-back yet lively vibe, steeped in culture and stunning harbor views.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
              
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header><h3>Queenstown, New Zealand</h3></Accordion.Header>
                <Accordion.Body>
                Queenstown, New Zealand’s adventure capital, stuns with its Southern Alps backdrop and Lake Wakatipu. Famous for
                 bungee jumping, skiing, and jet boating, it’s an adrenaline junkie’s paradise. Cozy cafes, vibrant nightlife,
                  and nearby fjords like Milford Sound add charm to this compact, thrilling South Island gem.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header><h3>Vanuatu, Fiji</h3></Accordion.Header>
                <Accordion.Body>
                Vanuatu, a Pacific island nation, captivates with its volcanic landscapes, turquoise waters, and vibrant Melanesian
                 culture. Home to active Mount Yasur, pristine beaches, and world-class diving at Espiritu Santo, it’s an adventure haven.
                  Traditional villages, kava ceremonies, and warm locals add authentic charm to this tropical paradise.
                  <br />
                  {/* <Link to='./bookings'><button className='btn'>Book Now</button></Link> */}
                </Accordion.Body>
              </Accordion.Item>
              <Link to='/bookings'><button className='btn'>Book Now</button></Link>
            </Accordion>
        </div>
    <Footer/>       
    </div>
  )
}

export default Australia
