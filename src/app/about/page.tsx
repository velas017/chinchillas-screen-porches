import Link from 'next/link'
import Image from 'next/image'
import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Beautiful wooden deck with outdoor furniture and scenic view"
                fill
                className={styles.aboutImage}
                priority
              />
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.content}>
              <h1 className={styles.title}>ABOUT CHINCHILLAS SCREEN PORCHES</h1>
              
              <p className={styles.paragraph}>
                Chinchillas Screen Porches is an outdoor living company that was founded in 2015 with the goal of making the home 
                improvement process easier and more rewarding for customers. Since then, we've completed thousands of 
                projects and expanded into locations across the region, which we believe speaks to the incredible service 
                we provide.
              </p>

              <p className={styles.paragraph}>
                If you're interested in upgrading your home with a new screen porch, pool enclosure, sunroom, patio cover, or 
                other outdoor living addition, there's no better company for you to call. We specialize in creating beautiful, 
                functional outdoor spaces that protect you from insects while maintaining stunning views of your surroundings.
              </p>

              <p className={styles.paragraph}>
                Our expert team uses only the highest quality materials and proven installation techniques to ensure your 
                investment will provide years of enjoyment. We look forward to hearing from you and helping transform your 
                outdoor space into the perfect retreat for you and your family!
              </p>

              <div className={styles.buttonContainer}>
                <Link href="/contact" className={styles.primaryButton}>
                  REQUEST A QUOTE
                </Link>
                <Link href="/service-areas" className={styles.secondaryButton}>
                  OUR LOCATIONS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}