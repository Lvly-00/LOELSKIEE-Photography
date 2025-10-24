import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import StudioIntroSection from './components/StudioIntroSection'
import OurServices from './components/OurServices'
import GallerySection from './components/GallerySection'


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <AboutSection/> */}
      <StudioIntroSection/>
      <OurServices/>
      <GallerySection/>
      <Footer/>
    </>
  )
}

export default App
