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
  // Screen Rooms
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    alt: 'Beautiful screen room with comfortable seating',
    title: 'Elegant Screen Room',
    category: 'screen-rooms'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=600&fit=crop',
    alt: 'Modern screen room with dining area',
    title: 'Modern Dining Room',
    category: 'screen-rooms'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop',
    alt: 'Cozy screen room with ceiling fan',
    title: 'Cozy Family Room',
    category: 'screen-rooms'
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
  },

  // Pergolas
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=1200&h=600&fit=crop',
    alt: 'Modern pergola with outdoor seating',
    title: 'Modern Pergola Design',
    category: 'pergolas'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200&h=600&fit=crop',
    alt: 'Wooden pergola over patio area',
    title: 'Classic Wood Pergola',
    category: 'pergolas'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1200&h=600&fit=crop',
    alt: 'White pergola with climbing plants',
    title: 'Garden Pergola',
    category: 'pergolas'
  },

  // Patio Covers
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&h=600&fit=crop',
    alt: 'Solid patio cover with outdoor furniture',
    title: 'Solid Patio Cover',
    category: 'patio-covers'
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=1200&h=600&fit=crop',
    alt: 'Lattice patio cover with filtered sunlight',
    title: 'Lattice Patio Cover',
    category: 'patio-covers'
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
    alt: 'Modern aluminum patio cover',
    title: 'Modern Aluminum Cover',
    category: 'patio-covers'
  }
]

const categories = [
  { id: 'sunrooms', label: 'Sunrooms', active: true },
  { id: 'screen-rooms', label: 'Screen Rooms', active: false },
  { id: 'pergolas', label: 'Pergolas', active: false },
  { id: 'patio-covers', label: 'Patio Covers', active: false },
  { id: 'pool-enclosures', label: 'Pool Enclosures', active: false }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('sunrooms')
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