import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Europe.css'
import { Link } from "react-router-dom";
// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import london from '../../assets/london.jpg'
import paris from '../../assets/paris.jpg'
import rome from '../../assets/rome.jpg'
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';


const Europe = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (  
    <div>
        <br/><br />
        <div className='americas'>
            <div className="intro">
            <h1>Europe</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='item'>
                <img src={london} alt="" />
                <Carousel.Caption>
                  <h3>Be at liberty with the world around you</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={paris} alt=""/>
                <Carousel.Caption>
                  <h3>Experience the breathtaking might and marvel of nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={rome} alt="" />
                <Carousel.Caption>
                  <h3>Have a glimpse of the ancient way of life</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>

            <h1>Top Destinations</h1>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header><h3>London, England</h3></Accordion.Header>
                <Accordion.Body>
                London, the UK’s vibrant capital, blends history and modernity. Iconic landmarks like Big Ben, the Tower Bridge,
                 and Buckingham Palace draw millions. Its diverse culture shines through in museums, theaters, and cuisine. The Thames River
                  snakes through, while bustling markets and green parks offer endless exploration.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
              
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header><h3>Paris, France</h3></Accordion.Header>
                <Accordion.Body>
                Paris, France’s capital, enchants with its iconic Eiffel Tower, historic Notre-Dame, and world-class Louvre Museum. Known for romance,
                 it boasts charming cafes, Seine River cruises, and vibrant neighborhoods like Montmartre. A hub of art, culture, and cuisine,
                  Paris blends timeless elegance with modern flair, captivating visitors year-round.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header><h3>Rome, Italy</h3></Accordion.Header>
                <Accordion.Body>
                Rome, Italy’s eternal city, mesmerizes with ancient wonders like the Colosseum, Roman Forum, and Pantheon. A blend of history and faith,
                 it houses Vatican City, St. Peter’s Basilica, and the Sistine Chapel. Cobbled streets, trattorias, and lively piazzas offer timeless
                  charm, making Rome a treasure trove of culture.
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

export default Europe
