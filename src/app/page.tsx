import HeroCarousel from '@/components/home/HeroCarousel/HeroCarousel'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroCarousel />
      
      <div className={styles.callButtonContainer}>
        <a href="tel:+1234567890" className={styles.callButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Call Us
        </a>
      </div>
      
      <main className={styles.main}>
        <section className={styles.contentSection}>
          <h2>Welcome to Chinchillas Screen Porches</h2>
          <p>Professional porch screening services to transform your outdoor living space.</p>
        </section>
      </main>
    </div>
  )
}