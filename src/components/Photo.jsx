import React from 'react'
import PhotoHeroSection from '../components/PhotoHeroSection'
import PhotoParagraphSection from '../components/PhotoParagraphSection'
import PhotoPackages from '../components/PhotoPackages'
import PhotoGallerySection from '../components/PhotoGallerySection'
import PhotoPricing from '../components/PhotoPricing'

function Photo() {
    return (
        <>
            <PhotoHeroSection />
            <PhotoParagraphSection />
            <PhotoPackages />
            <PhotoPricing/>
            <PhotoGallerySection />
        </>
    )
}

export default Photo;
