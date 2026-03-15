import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Process.module.css'

export default function Process() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>How we work</div>
        <h1>Process Improvement</h1>
        <p>We don't just build things — we make sure what we build actually solves the right problem.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          <div className={styles.steps}>
            {[
              { n: 1, title: 'Discovery Call', text: 'A free 30-minute conversation to understand your business, your challenges, and what you\'re trying to achieve.' },
              { n: 2, title: 'Process Mapping', text: 'We document your current workflows — spotting bottlenecks, manual tasks, and gaps where time or data is being lost.' },
              { n: 3, title: 'Recommendations Report', text: 'A clear, jargon-free document outlining what we found, what we\'d recommend, and the expected impact.' },
              { n: 4, title: 'Design & Prototype', text: 'Before writing a line of code, we prototype the solution. You review and approve before we build.' },
              { n: 5, title: 'Build & Iterate', text: 'We build in sprints with regular check-ins. You see progress throughout — no disappearing for months.' },
              { n: 6, title: 'Handover & Support', text: 'Full documentation, training if needed, and ongoing support so your team can run with it confidently.' },
            ].map(step => (
              <div key={step.n} className={styles.step}>
                <div className={styles.stepNum}>{step.n}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className={s.card} style={{ marginBottom: '20px' }}><span className={s.cardIcon}>💡</span><h3>Why process first?</h3><p>Building the wrong thing perfectly is still the wrong thing. Taking time upfront means the system we build actually fits.</p></div>
            <div className={s.card} style={{ marginBottom: '20px' }}><span className={s.cardIcon}>⏱️</span><h3>Typical timelines</h3><p>Discovery & audit: 1–2 weeks. Small builds: 2–4 weeks. Larger systems: 6–12 weeks.</p></div>
            <div className={s.card}><span className={s.cardIcon}>💬</span><h3>Communication</h3><p>Weekly updates as standard. Direct access to the person building your project — not an account manager.</p></div>
          </div>
        </div>
      </section>

      <div className={s.ctaBanner}>
        <h2>Start with a free discovery call</h2>
        <p>30 minutes. No commitment. Just clarity on what's possible.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a Consultation →</Link>
      </div>
    </>
  )
}
