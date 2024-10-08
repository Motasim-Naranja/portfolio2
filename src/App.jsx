import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Download from './Components/Download'
import Projects from './Components/Projects'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>

      <Download/>
    </>
  )
}

export default App