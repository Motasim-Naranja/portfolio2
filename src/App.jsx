import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Download from './Components/Download'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>

      <Download/>
    </>
  )
}

export default App