import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Africa.css'
import { Link } from "react-router-dom";
// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import pyramids from '../../assets/pyramids.jpg'
import safari from '../../assets/safari.jpg'
import capetown from '../../assets/capetown.jpg'
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';


const Africa = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (  
    <div>
        <br/><br />
        <div className='americas'>
            <div className="intro">
            <h1>Africa</h1>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='item'>
                <img src={pyramids} alt="" />
                <Carousel.Caption>
                  <h3>Be at liberty with the world around you</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={safari} alt=""/>
                <Carousel.Caption>
                  <h3>Experience the breathtaking might and marvel of nature</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img src={capetown} alt="" />
                <Carousel.Caption>
                  <h3>Have a glimpse of the ancient way of life</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>

            <h1>Top Destinations</h1>
            <Accordion>
              <Accordion.Item eventKey='0'>
                <Accordion.Header><h3>Giza Pyramids, Egypt</h3></Accordion.Header>
                <Accordion.Body>
                The Giza Pyramids, near Cairo, Egypt, are ancient marvels built around 2630–2500 BCE as pharaohs’ tombs. 
                The Great Pyramid, the largest, stands 481 feet tall, showcasing precise engineering with millions of limestone blocks.
                 These iconic structures, including Khufu, Khafre, and Menkaure’s pyramids, symbolize Egypt’s rich history and architectural genius.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
              
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header><h3>Maasai Mara, Kenya</h3></Accordion.Header>
                <Accordion.Body>
                The Maasai Mara, in southwestern Kenya, is a renowned wildlife reserve famous for its vast savannahs, abundant biodiversity, 
                and the annual Great Migration of wildebeest and zebras. Named after the Maasai people, it offers stunning landscapes, safari
                 adventures, and a rich cultural heritage, attracting nature lovers worldwide.
                  <br />
                  {/* <button className='btn'>Book Now</button> */}
                </Accordion.Body>
                
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header><h3>Cape Town, South Africa</h3></Accordion.Header>
                <Accordion.Body>
                Cape Town, South Africa’s coastal gem, blends stunning natural beauty with vibrant culture. Nestled between Table Mountain
                 and the Atlantic Ocean, it offers iconic hikes, pristine beaches like Camps Bay, and historic sites like Robben Island. The 
                 bustling V&A Waterfront, diverse cuisine, and nearby wine regions complete its allure.
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

export default Africa
