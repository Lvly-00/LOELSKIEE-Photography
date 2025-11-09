import { useState } from 'react'

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BookNowSection from '../components/BookNowSection'
import Footer from '../components/Footer'
import AboutMeSection from '../components/AboutMeSection'
import OurServices from '../components/OurServices'
import GallerySection from '../components/GallerySection'


function Home() {

    return (
        <>
            <Navbar />
            <HeroSection />
            <BookNowSection />
            {/* <AboutMeSection />  */}
            {/* <OurServices />
            <GallerySection /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home;
