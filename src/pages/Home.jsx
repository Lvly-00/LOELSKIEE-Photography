import { useState } from 'react'

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BookNowSection from '../components/BookNowSection'
import Footer from '../components/Footer'
import AboutMeSection from '../components/AboutMeSection'
import OurServices from '../components/OurServices'
import GallerySection from '../components/GallerySection'
import HeroSection2 from '../components/HeroSection2'
import DealsSection from '../components/DealsSection'
import StudioSection from '../components/StudioSection'


function Home() {

    return (
        <>
            <HeroSection />
            <BookNowSection />
            <AboutMeSection /> 
            {/* * <OurServices /> */}
            <DealsSection />
            <StudioSection/>
            <GallerySection />
            <HeroSection2 />
        </>
    )
}

export default Home;
