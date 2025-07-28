'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './services.module.css'

interface ServiceImage {
  id: number
  image: string
  alt: string
}

interface ServiceInfo {
  id: string
  title: string
  description: string
  features: string[]
  images: ServiceImage[]
}

const servicesData: ServiceInfo[] = [
  {
    id: 'sunrooms',
    title: 'Sunrooms',
    description: 'Add valuable living space to your home with our beautiful sunrooms. Enjoy natural light and outdoor views while staying comfortable in any weather, perfect for relaxation or entertaining.',
    features: [
      'Additional year-round living space',
      'Maximum natural light and outdoor views',
      'Climate-controlled comfort in any season',
      'Variety of styles and configurations available',
      'Significant increase in home value'
    ],
    images: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        alt: 'Bright sunroom with large windows'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
        alt: 'Modern sunroom with contemporary furniture'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop',
        alt: 'Traditional sunroom with classic design'
      }
    ]
  },
  {
    id: 'screen-rooms',
    title: 'Screen Rooms',
    description: 'Transform your outdoor space into a comfortable, bug-free retreat with our custom screen rooms. Perfect for enjoying the outdoors while staying protected from insects and weather elements.',
    features: [
      'Custom designs to match your home\'s architecture',
      'High-quality screening materials for maximum durability',
      'Professional installation with attention to detail',
      'Bug-free outdoor enjoyment year-round',
      'Increased home value and living space'
    ],
    images: [
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        alt: 'Beautiful screen room with comfortable seating'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop',
        alt: 'Modern screen room with dining area'
      },
      {
        id: 6,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
        alt: 'Cozy screen room with ceiling fan'
      }
    ]
  },
  {
    id: 'pergolas',
    title: 'Pergolas',
    description: 'Create an elegant outdoor living space with our custom pergolas. These beautiful structures provide the perfect balance of sun and shade while adding architectural interest to your backyard.',
    features: [
      'Custom designs in wood, vinyl, or aluminum',
      'Adjustable louvers for shade control',
      'Integrated lighting and fan options',
      'Weather-resistant materials and finishes',
      'Perfect for outdoor dining and entertaining'
    ],
    images: [
      {
        id: 7,
        image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&h=400&fit=crop',
        alt: 'Modern pergola with outdoor seating'
      },
      {
        id: 8,
        image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=600&h=400&fit=crop',
        alt: 'Wooden pergola over patio area'
      },
      {
        id: 9,
        image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=400&fit=crop',
        alt: 'White pergola with climbing plants'
      }
    ]
  },
  {
    id: 'patio-covers',
    title: 'Patio Covers',
    description: 'Protect your patio area and outdoor furniture with our stylish, durable patio covers. Enjoy your outdoor space rain or shine with complete weather protection.',
    features: [
      'Complete weather protection for year-round use',
      'Various styles: solid, lattice, or combination',
      'Maintenance-free materials available',
      'Custom sizing to fit any patio',
      'Integrated gutter systems for water management'
    ],
    images: [
      {
        id: 10,
        image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&h=400&fit=crop',
        alt: 'Solid patio cover with outdoor furniture'
      },
      {
        id: 11,
        image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=600&h=400&fit=crop',
        alt: 'Lattice patio cover with filtered sunlight'
      },
      {
        id: 12,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
        alt: 'Modern aluminum patio cover'
      }
    ]
  },
  {
    id: 'pool-enclosures',
    title: 'Pool Enclosures',
    description: 'Extend your swimming season and reduce maintenance with our premium pool enclosures. Protect your pool from debris while creating a luxurious, resort-like atmosphere in your backyard.',
    features: [
      'Year-round pool enjoyment and protection',
      'Reduced pool maintenance and chemical costs',
      'UV protection and debris prevention',
      'Custom designs with various panel options',
      'Enhanced safety for children and pets'
    ],
    images: [
      {
        id: 13,
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
        alt: 'Luxurious pool enclosure with clear panels'
      },
      {
        id: 14,
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop',
        alt: 'Modern pool enclosure with glass walls'
      },
      {
        id: 15,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
        alt: 'Resort-style pool enclosure'
      }
    ]
  }
]

const categories = [
  { id: 'sunrooms', label: 'Sunrooms' },
  { id: 'screen-rooms', label: 'Screen Rooms' },
  { id: 'pergolas', label: 'Pergolas' },
  { id: 'patio-covers', label: 'Patio Covers' },
  { id: 'pool-enclosures', label: 'Pool Enclosures' }
]

export default function Services() {
  const [activeService, setActiveService] = useState('sunrooms')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentServiceData = servicesData.find(service => service.id === activeService) || servicesData[0]

  const handleServiceChange = (serviceId: string) => {
    if (serviceId !== activeService) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveService(serviceId)
        setCurrentSlide(0)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % currentServiceData.images.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + currentServiceData.images.length) % currentServiceData.images.length)
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
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        <div className={styles.servicesHeader}>
          <h1 className={styles.title}>OUR SERVICES</h1>
          
          <div className={styles.categoryButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleServiceChange(category.id)}
                className={`${styles.categoryButton} ${
                  activeService === category.id ? styles.active : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.serviceContent}>
          <div className={styles.imageSection}>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div className={`${styles.slideContainer} ${isTransitioning ? styles.transitioning : ''}`}>
                  {currentServiceData.images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        className={styles.slideImage}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={handlePrevSlide}
                  aria-label="Previous image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={handleNextSlide}
                  aria-label="Next image"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className={styles.dotsContainer}>
                  {currentServiceData.images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.serviceCard}>
              <h2 className={styles.serviceTitle}>{currentServiceData.title}</h2>
              <p className={styles.serviceDescription}>{currentServiceData.description}</p>
              
              <div className={styles.featuresSection}>
                <h3 className={styles.featuresTitle}>Key Features & Benefits:</h3>
                <ul className={styles.featuresList}>
                  {currentServiceData.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonContainer}>
                <Link href="/contact" className={styles.primaryButton}>
                  REQUEST A QUOTE
                </Link>
                <Link href="/gallery" className={styles.secondaryButton}>
                  VIEW GALLERY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}