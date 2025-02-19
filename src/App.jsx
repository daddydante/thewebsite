import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Title from './components/title/Title'
import Destinations from './components/destinations/Destinations'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Title subTitle='Destinations'title='Pick your next experience'/>
      <Destinations/>
      <Title subTitle='Testimonials'title='What our clients say about us'/>
      <Testimonials/>
      <Title title='Reach out to us'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

