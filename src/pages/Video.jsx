import React from 'react'
import VideoHeroSection from '../components/VideoHeroSection'
import VideoParagraphSection from '../components/VideoParagraphSection'
import VideoPackages from '../components/VideoPackages'
import VideoPricing from '../components/VideoPricing'

function Video() {
    return (
        <>
            <VideoHeroSection />
            <VideoParagraphSection />
            <VideoPackages />
            <VideoPricing/>
        </>
    )
}

export default Video;
