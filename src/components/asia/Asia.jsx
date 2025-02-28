import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Asia.css'
import { Link } from "react-router-dom";
// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import hongkong from '../../assets/hongkong.jpg'
import singapore from '../../assets/singapore.jpg'
import bangkok from '../../assets/bangkok.jpg'
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';


const Asia = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (  
    <div>
        <br/><br />
        <div className='americas'>
            <div className="intro">
            <h1>Asia</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='item'>
                <img src={hongkong} alt="" />
                <Carousel.Caption>
                  <h3>Be at liberty with the world around you</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={singapore} alt=""/>
                <Carousel.Caption>
                  <h3>Experience the breathtaking might and marvel of nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={bangkok} alt="" />
                <Carousel.Caption>
                  <h3>Have a glimpse of the ancient way of life</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>

            <h1>Top Destinations</h1>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header><h3>Hong Kong, China</h3></Accordion.Header>
                <Accordion.Body>
                Hong Kong, a dynamic metropolis, blends East and West with its stunning skyline, Victoria Harbour, and bustling markets.
                 Famous for dim sum, it offers vibrant nightlife, the Peak’s panoramic views, and cultural gems like temples.
                  A global financial hub, it thrives amid a unique fusion of tradition and modernity.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
              
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header><h3>Singapore</h3></Accordion.Header>
                <Accordion.Body>
                Singapore, a gleaming city-state, blends futuristic skyscrapers with lush gardens like Gardens by the Bay. Known for Marina Bay
                 Sands, vibrant hawker food, and strict cleanliness, it’s a global hub of innovation and culture. Compact yet diverse,
                  it offers Chinatown, Little India, and Sentosa’s beaches in one dynamic package.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header><h3>Bangkok, Thailand</h3></Accordion.Header>
                <Accordion.Body>
                Bangkok, Thailand’s bustling capital, dazzles with golden temples like Wat Arun and the Grand Palace. A sensory overload, 
                it blends chaotic markets, spicy street food, and vibrant nightlife with serene riverboats along the Chao Phraya. Modern 
                skyscrapers meet traditional charm, making it a captivating, ever-evolving Southeast Asian gem.
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

export default Asia
