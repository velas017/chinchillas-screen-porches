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
    description: 'Are there times when you want to surround yourself with outdoor scenery and bask in natural light but don\'t feel up for dealing with the weather conditions outside? Rather than having to decide between the beauty of the outdoors and the comfort of indoors, you can strike the perfect balance by relaxing in an insulated sunroom professionally installed by Chinchilla Porches.',
    features: [
      'Full insulation for year-round comfort',
      'Maximum sunlight exposure through large glass panels',
      'Complete protection from outdoor elements',
      'Customizable styles including all-glass roof conservatories',
      'Power outlet installation for TVs and electronics',
      'Additional doors and ceiling fans available',
      'Seamlessly integrates as a true home extension'
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
    description: 'A cool breeze on a beautiful, sunny day feels so much better when it doesn\'t come with any tiny, pesky insects to bug you. With a screen enclosure installed by Chinchilla Porches, your patio or porch will be completely protected from pests and enhanced with a stylish new look that\'s sure to become the highlight of your backyard.',
    features: [
      'Complete protection from insects while maintaining fresh air flow',
      'Ultra-durable frames with high-grade fiberglass mesh screens',
      'Thermal roofing systems for added comfort and insulation',
      'Wide variety of colors, textures, and design options',
      'Perfect integration with existing home aesthetic',
      'Risk-free experience with best-in-class customer service'
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
    description: 'As you plan a design for your backyard, pay special attention to giving the space visual interest. For many homeowners, a pergola installed by Chinchilla Porches proves to be the perfect backyard addition. We can build our pergolas over patios, gardens, and virtually any other outdoor settings, where they will not only enhance the appearance of the space, but also provide partial shade over the covered area for added comfort.',
    features: [
      'Aluminum construction - fully weather resistant',
      'Never needs painting - essentially maintenance free',
      'Withstands rain, sun, wind without cracking or warping',
      'Available in diverse variety of sizes, shapes, styles, and colors',
      'Creates inviting atmosphere for outdoor activities',
      'Transforms ordinary backyards into personal oases'
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
    description: 'How many times have you wanted to relax on your outdoor patio, but the sun feels downright oppressive or rain begins to fall? With a patio cover installed by Chinchilla Porches, you can enjoy effective protection from sun and rain, enabling you to invite people over for outdoor get-togethers with confidence, knowing that your plans can stay intact regardless of weather.',
    features: [
      'Effective protection from both sun and rain',
      'Thermal roofs that help keep covered space cooler',
      'Customizable with shingles to blend with your home',
      'Ceiling fan options for enhanced comfort',
      'Can be enclosed later to create screen room or sunroom',
      'Year-round outdoor enjoyment without weather concerns'
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
    description: 'Today\'s pool enclosures have been redesigned to meet the most stringent building codes. A pool enclosure is one solution to the high cost associated with annual pool care. A Chinchilla Porches pool enclosure helps reduce the sun\'s effect on pool chemicals while protecting from debris, adds beauty and additional safety, giving you lower-cost pool maintenance, peace of mind, and more time to enjoy your pool.',
    features: [
      'Keeps mosquitoes, wasps, and other flying insects out',
      'No debris in pool - leaves, branches, and dead bugs',
      'All-aluminum frame requires NO maintenance',
      'Self-latching and closing doors for safety',
      'Saves money on costly pool chemicals',
      'Extends the life of pool equipment',
      'Keeps neighborhood children away from the pool'
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