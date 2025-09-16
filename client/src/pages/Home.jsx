import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Plan from '../components/Plan'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonials/>
      <Plan/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home