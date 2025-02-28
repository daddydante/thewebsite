import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Americas.css'
import { Link } from "react-router-dom";
// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import liberty from '../../assets/liberty.jpg'
import tikal from '../../assets/tikal.jpg'
import machupicchu from '../../assets/machupicchu.jpg'
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';


const Americas = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (  
    <div>
        <br/><br />
        <div className='americas'>
            <div className="intro">
            <h1>The Americas</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='item'>
                <img src={liberty} alt="" />
                <Carousel.Caption>
                  <h3>Be at liberty with the world around you</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={tikal} alt=""/>
                <Carousel.Caption>
                  <h3>Experience the breathtaking might and marvel of nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={machupicchu} alt="" />
                <Carousel.Caption>
                  <h3>Have a glimpse of the ancient way of life</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>

            <h1>Top Destinations</h1>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header><h3>New York, USA</h3></Accordion.Header>
                <Accordion.Body>
                A New York tour dazzles with iconic sights: the Statue of Liberty, Times Square's neon chaos, Central Park's green escape,
                 and the towering Empire State Building. Explore diverse neighborhoods, savor world-class food, and feel the city's pulse—history,
                  culture, and energy packed into every block. Unforgettable, fast-paced, and quintessentially American.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
              
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header><h3>Machu Picchu, Peru</h3></Accordion.Header>
                <Accordion.Body>
                Explore Machu Picchu, the iconic Incan city nestled in Peru’s Andes. This tour offers a scenic trek or train ride to the 15th-century
                 ruins, revealing ancient stone structures, terraced fields, and panoramic views. Guided insights into its history and mystery make this
                  UNESCO site an unforgettable adventure.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header><h3>Rio de Janeiro, Brazil</h3></Accordion.Header>
                <Accordion.Body>
                A Rio de Janeiro tour showcases vibrant culture and stunning landscapes. Visit Christ the Redeemer atop Corcovado, relax on Copacabana
                 and Ipanema beaches, and ride the cable car to Sugarloaf Mountain for panoramic views. Explore historic Santa Teresa, enjoy Carnival vibes,
                  and savor local cuisine amidst a lively, scenic backdrop.
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

export default Americas
