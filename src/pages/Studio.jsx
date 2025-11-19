import React from 'react'
import StudioHeroSection from '../components/StudioHeroSection'
import StudioParagraphSection from '../components/StudioParagraphSection'
import StudioPackages from '../components/StudioPackages'
import StudioPricing from '../components/StudioPricing'

function Studio() {
    return (
        <>
            <StudioHeroSection />
            <StudioParagraphSection />
            <StudioPackages />
            <StudioPricing/>
        </>
    )
}

export default Studio;
