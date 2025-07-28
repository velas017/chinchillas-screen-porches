import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const servicesLinks = [
    { href: '/services/pool-enclosures', label: 'Pool Enclosures' },
    { href: '/services/screen-enclosures', label: 'Screen Enclosures' },
    { href: '/services/sunrooms', label: 'Sunrooms' },
    { href: '/services/screen-porches', label: 'Screen Porches' }
  ]

  const outdoorLivingLinks = [
    { href: '/services/patio-covers', label: 'Patio Covers' },
    { href: '/services/pergolas', label: 'Pergolas' },
    { href: '/services/awnings', label: 'Retractable Awnings' }
  ]

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/service-areas', label: 'Service Areas' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <span className={styles.logoTop}>Chinchillas</span>
              <span className={styles.logoBottom}>Screen Porches</span>
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.address}>
                123 Main Street, Suite A<br />
                Your City, State 12345
              </p>
              <a href="tel:+1234567890" className={styles.phone}>
                📞 (123) 456-7890
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linkList}>
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Outdoor Living</h3>
              <ul className={styles.linkList}>
                {outdoorLivingLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3.09 8.26A1 1 0 003 9v10a2 2 0 002 2h14a2 2 0 002-2V9a1 1 0 00-.91-.74L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.ctaTitle}>NO MONEY DOWN</h3>
              <p className={styles.ctaSubtitle}>PAY WHEN YOUR PROJECT IS COMPLETE</p>
              <a href="/contact" className={styles.ctaButton}>
                REQUEST A FREE QUOTE
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Chinchillas Screen Porches. All rights reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer