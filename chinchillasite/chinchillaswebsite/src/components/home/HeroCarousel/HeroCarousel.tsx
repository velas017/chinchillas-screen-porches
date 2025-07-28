'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroCarousel.module.css'

interface CarouselSlide {
  id: number
  image: string
  alt: string
  title?: string
  subtitle?: string
}

interface HeroCarouselProps {
  slides?: CarouselSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    alt: 'Beautiful screened porch with comfortable seating',
    title: 'Transform Your Outdoor Space',
    subtitle: 'Professional porch screening services'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=600&fit=crop',
    alt: 'Modern screened porch with dining area',
    title: 'Enjoy Bug-Free Comfort',
    subtitle: 'Quality materials and expert installation'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop',
    alt: 'Elegant screened porch with ceiling fan',
    title: 'Extend Your Living Space',
    subtitle: 'Custom designs for every home'
  }
]

const HeroCarousel = ({ 
  slides = defaultSlides, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      handleNextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentSlide, autoPlay, autoPlayInterval])

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handleDotClick = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      }, 300)
    }
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <div className={`${styles.slideContainer} ${isTransitioning ? styles.transitioning : ''}`}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className={styles.slideImage}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                {(slide.title || slide.subtitle) && (
                  <div className={styles.slideContent}>
                    {slide.title && <h1 className={styles.slideTitle}>{slide.title}</h1>}
                    {slide.subtitle && <p className={styles.slideSubtitle}>{slide.subtitle}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.prevButton} ${styles.desktopOnly}`}
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className={`${styles.navButton} ${styles.nextButton} ${styles.desktopOnly}`}
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={`${styles.dotsContainer} ${styles.desktopOnly}`}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.mobileControls}>
          <div className={styles.mobileDotsContainer}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.mobileDot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className={styles.mobileButtonsContainer}>
            <button
              className={`${styles.mobileNavButton} ${styles.mobilePrevButton}`}
              onClick={handlePrevSlide}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className={`${styles.mobileNavButton} ${styles.mobileNextButton}`}
              onClick={handleNextSlide}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel