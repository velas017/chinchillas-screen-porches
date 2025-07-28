'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './gallery.module.css'

interface GalleryImage {
  id: number
  image: string
  alt: string
  title?: string
  category: string
}

const galleryImages: GalleryImage[] = [
  // Screen Porches
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    alt: 'Beautiful screened porch with comfortable seating',
    title: 'Elegant Screen Porch',
    category: 'screen-porches'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=600&fit=crop',
    alt: 'Modern screened porch with dining area',
    title: 'Modern Dining Porch',
    category: 'screen-porches'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop',
    alt: 'Cozy screened porch with ceiling fan',
    title: 'Cozy Family Porch',
    category: 'screen-porches'
  },
  
  // Pool Enclosures
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop',
    alt: 'Luxurious pool enclosure with clear panels',
    title: 'Luxury Pool Enclosure',
    category: 'pool-enclosures'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&h=600&fit=crop',
    alt: 'Modern pool enclosure with glass walls',
    title: 'Glass Pool Enclosure',
    category: 'pool-enclosures'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop',
    alt: 'Resort-style pool enclosure',
    title: 'Resort Style Enclosure',
    category: 'pool-enclosures'
  },

  // Sunrooms
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    alt: 'Bright sunroom with large windows',
    title: 'Bright Garden Sunroom',
    category: 'sunrooms'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop',
    alt: 'Modern sunroom with contemporary furniture',
    title: 'Contemporary Sunroom',
    category: 'sunrooms'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&h=600&fit=crop',
    alt: 'Traditional sunroom with classic design',
    title: 'Traditional Sunroom',
    category: 'sunrooms'
  }
]

const categories = [
  { id: 'screen-porches', label: 'Screen Porches', active: true },
  { id: 'pool-enclosures', label: 'Pool Enclosures', active: false },
  { id: 'sunrooms', label: 'Sunrooms', active: false }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('screen-porches')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredImages = galleryImages.filter(img => img.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveCategory(categoryId)
        setCurrentSlide(0)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredImages.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
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
    <div className={styles.galleryPage}>
      <div className={styles.container}>
        <div className={styles.galleryHeader}>
          <h1 className={styles.title}>
            BROWSE OUR GALLERY OF RECENT PROJECTS AND INSPIRATIONS
          </h1>
          
          <div className={styles.categoryButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`${styles.categoryButton} ${
                  activeCategory === category.id ? styles.active : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
              <div className={`${styles.slideContainer} ${isTransitioning ? styles.transitioning : ''}`}>
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        className={styles.slideImage}
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                    {image.title && (
                      <div className={styles.slideContent}>
                        <h3 className={styles.slideTitle}>{image.title}</h3>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                className={`${styles.navButton} ${styles.prevButton} ${styles.desktopOnly}`}
                onClick={handlePrevSlide}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                className={`${styles.navButton} ${styles.nextButton} ${styles.desktopOnly}`}
                onClick={handleNextSlide}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`${styles.dotsContainer} ${styles.desktopOnly}`}>
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className={styles.mobileControls}>
              <div className={styles.mobileDotsContainer}>
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.mobileDot} ${index === currentSlide ? styles.activeDot : ''}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div className={styles.mobileButtonsContainer}>
                <button
                  className={`${styles.mobileNavButton} ${styles.mobilePrevButton}`}
                  onClick={handlePrevSlide}
                  aria-label="Previous image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  className={`${styles.mobileNavButton} ${styles.mobileNextButton}`}
                  onClick={handleNextSlide}
                  aria-label="Next image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}