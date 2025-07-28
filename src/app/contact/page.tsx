'use client'

import { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    areaOfInterest: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      zip: '',
      areaOfInterest: '',
      message: ''
    })
    setIsSubmitting(false)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <div className={styles.sunIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h1 className={styles.formTitle}>
                  GET IN TOUCH WITH US FOR MORE INFORMATION OR QUESTIONS
                </h1>
                <p className={styles.formSubtitle}>
                  PLEASE USE THE FORM BELOW TO CONTACT US
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${styles.halfWidth}`}
                    required
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${styles.halfWidth}`}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Area of Interest</option>
                    <option value="sunrooms">Sunrooms</option>
                    <option value="screen-rooms">Screen Rooms</option>
                    <option value="pergolas">Pergolas</option>
                    <option value="patio-covers">Patio Covers</option>
                    <option value="pool-enclosures">Pool Enclosures</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <label className={styles.textareaLabel}>HOW MAY WE HELP YOU?</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>

                <p className={styles.disclaimer}>
                  By submitting, you authorize Chinchillas Screen Porches to reach out via phone, email, or text. 
                  We will never share your personal information with 3rd parties for marketing purposes or spam you. 
                  You can opt out at any time.
                </p>
              </form>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>MAIN OFFICE</h3>
              <div className={styles.infoContent}>
                <div className={styles.addressInfo}>
                  <p className={styles.address}>
                    123 Main Street, Suite A<br />
                    Your City, State 12345
                  </p>
                </div>
                <div className={styles.contactDetails}>
                  <a href="tel:+1234567890" className={styles.phoneLink}>
                    📞 (123) 456-7890
                  </a>
                  <a href="mailto:info@chinchillasscreenporches.com" className={styles.emailLink}>
                    ✉️ info@chinchillasscreenporches.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>OFFICE HOURS</h3>
              <div className={styles.hoursContent}>
                <div className={styles.hoursItem}>
                  <span className={styles.hoursDay}>Monday - Friday:</span>
                  <span className={styles.hoursTime}>9:00 am - 5:00 pm</span>
                </div>
                <div className={styles.hoursItem}>
                  <span className={styles.hoursDay}>Saturday:</span>
                  <span className={styles.hoursTime}>Closed</span>
                </div>
                <div className={styles.hoursItem}>
                  <span className={styles.hoursDay}>Sunday:</span>
                  <span className={styles.hoursTime}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}