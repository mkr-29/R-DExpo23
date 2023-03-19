import React from 'react'
import About from './Components/About/About'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar'

export default function Homepage() {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <About/>
    </div>
  )
}
