import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar'
import Schedule from './Components/Schedule/Schedule'

export default function Homepage() {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <About/>
        <Events/>
        <Schedule/>
        <Footer/>
    </div>
  )
}
