import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Title from './components/title/Title'
import Destinations from './components/destinations/Destinations'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Americas from './components/americas/Americas'
import Africa from './components/africa/Africa'
import Europe from './components/europe/Europe'
import Asia from './components/asia/Asia'
import Australia from './components/australia/Australia'
import Highseas from './components/highseas/Highseas'

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
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
          }/>
          <Route path='/americas' element={<Americas/>}/>
          <Route path='/africa' element={<Africa/>}/>
          <Route path='/europe' element={<Europe/>}/>
          <Route path='/asia' element={<Asia/>}/>
          <Route path='/australia' element={<Australia/>}/>
          <Route path='/highseas' element={<Highseas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

