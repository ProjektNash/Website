import { useState } from 'react'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Contact.module.css'

const EMAILJS_SERVICE_ID  = 'service_sn3mbqp'
const EMAILJS_TEMPLATE_ID = 'template_fmyozvb'
const EMAILJS_PUBLIC_KEY  = 'l0tTXm_IoG3CTTcLj'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const templateParams = {
      from_name:  form.name.value,
      from_email: form.email.value,
      company:    form.company.value,
      service:    form.service.value,
      message:    form.message.value,
    }

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>Get in touch</div>
        <h1>Book a Consultation</h1>
        <p>Tell us about your project and I'll get back to you within 48 hours to arrange a free discovery call.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>

          <div className={styles.info}>
            <h2>Let's talk about your project</h2>
            <p>Whether you have a clear brief or just a problem to solve, I'm happy to have an initial conversation with no commitment.</p>
            <div className={styles.detail}><span>📧</span><a href="mailto:adrian@projektnash.co.uk">adrian@projektnash.co.uk</a></div>
            <div className={styles.detail}><span>📍</span><span>United Kingdom</span></div>
            <div className={styles.detail}><span>⏱️</span><span>Response within 48 hours</span></div>
            <div className={styles.callout}>
              <strong>Free 30-minute discovery call</strong><br />
              No sales pitch. I'll ask about your business and current processes — and give you honest advice on what might help.
            </div>
          </div>

          <div className={s.card}>
            {status === 'success' ? (
              <div className={styles.success}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✅</div>
                <h3>Message sent!</h3>
                <p>We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" placeholder="Jane Smith" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" placeholder="jane@company.com" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company (optional)</label>
                  <input type="text" id="company" name="company" placeholder="Your company name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Which plan are you interested in?</label>
                  <select id="service" name="service">
                    <option value="">Select a plan...</option>
                    <option>Essential (1–2 modules, £300–£350/mo) — £1,000 onboarding</option>
                    <option>Professional (3–5 modules, £400–£500/mo) — £1,000 onboarding</option>
                    <option>Advanced (6–7 modules, £550–£600/mo) — £1,000 onboarding</option>
                    <option>Enterprise (12+ modules, custom quote) — custom onboarding</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">What would you like built?</label>
                  <textarea id="message" name="message" placeholder="Describe the modules or features you need — what should the system do and what problem does it solve?" required />
                </div>
                <button
                  type="submit"
                  className={`${s.btn} ${s.btnPrimary}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message →'}
                </button>
                {status === 'error' && (
                  <p className={styles.errorMsg}>Something went wrong — please email us directly.</p>
                )}
              </form>
            )}
          </div>

        </div>
      </section>

      {/* EmailJS SDK */}
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
    </>
  )
}
