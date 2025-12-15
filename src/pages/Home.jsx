import React from 'react'; // Don't forget to import React
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BookNowSection from '../components/BookNowSection';
import AboutMeSection from '../components/AboutMeSection';
// import OurServices from '../components/OurServices'; // Commented out in your code
import GallerySection from '../components/GallerySection';
import HeroSection2 from '../components/HeroSection2';
import DealsSection from '../components/DealsSection';
import StudioSection from '../components/StudioSection';

function Home() {
    return (
        <>
            {/* ID: home */}
            <div id="home">
                <HeroSection />
            </div>

            <BookNowSection />

            {/* ID: aboutme */}
            <div id="aboutme">
                <AboutMeSection />
            </div>

            {/* ID: deals */}
            <div id="deals">
                <DealsSection />
            </div>

            <StudioSection/>
            <GallerySection />
            <HeroSection2 />
        </>
    )
}

export default Home;