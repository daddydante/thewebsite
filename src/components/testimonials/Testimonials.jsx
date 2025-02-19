import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import client1 from '../../assets/client1.avif'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.webp'
import client4 from '../../assets/client4.jpg'

const Testimonials = () => {

  const slider=useRef();
  let tx=0;

  const slideNext=()=>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slidePrev=()=>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={back} alt="" className='back-btn' onClick={slidePrev}/>
      <img src={next} alt="" className='next-btn' onClick={slideNext}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={client1} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <p>Great packages, top professionals and a memorable time in China, all thanks to The Website Tours!</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={client2} alt="" />
                <div>
                  <h3>Jane White</h3>
                  <p>Truly the best experience I've ever had in Kenya and Tanzania all thanks to The Website Tours.
                    Highly recommend them!
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={client3} alt="" />
                <div>
                  <h3>Devonte Marcus</h3>
                  <p>I never knew Brasil had that many tourist attractions! Great guides, great packages, and a great
                    experience with my family thanks to The Website Tours. 
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={client4} alt="" />
                <div>
                  <h3>Sasha Riley</h3>
                  <p>Don't think, just book! You'll not regret it!</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonials
