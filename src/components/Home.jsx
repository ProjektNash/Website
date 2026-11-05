import { Link } from 'react-router-dom'
import { HardHat, Award, Users, PoundSterling } from 'lucide-react'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Home.module.css'
import { SERVICES } from '../data/services'

const CAREER = [
  'Cleaner',
  'Packaging lines',
  'Warehouse',
  'Manufacturing',
  'Planning',
  'Quality assurance',
  'Production manager',
]

const TRUST = [
  { icon: HardHat, text: '11 years in manufacturing' },
  { icon: Award, text: 'NEBOSH certified' },
  { icon: Users, text: 'Unlimited users, no per-seat fees' },
  { icon: PoundSterling, text: 'From £150 a month' },
]

const STEPS = [
  { title: 'Discover', text: 'Map your processes and find where time is being lost.' },
  { title: 'Design', text: 'Prototype the system and agree it before any build.' },
  { title: 'Deliver', text: 'Build in short cycles with regular check-ins.' },
]

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.heroTag}>Software for UK manufacturers</div>
          <h1>Software for manufacturers, built by someone who's <em>run the floor</em>.</h1>
          <p>Custom production, stock, maintenance and reporting systems — designed around how your site actually works, not the other way round.</p>
          <div className={styles.heroActions}>
            <Link to="/contact" className={`${s.btn} ${s.btnPrimary}`}>Book a free consultation →</Link>
            <Link to="/pricing" className={`${s.btn} ${s.btnSecondary}`}>See pricing</Link>
          </div>
        </div>

        <aside className={styles.founder}>
          <div className={styles.founderLabel}>Meet the founder</div>
          <div className={styles.founderName}>Adrian Nash-Morris</div>
          <p className={styles.founderIntro}>Eleven years working up through almost every role in a manufacturing operation.</p>
          <ol className={styles.career}>
            {CAREER.map((role, i) => (
              <li key={role} className={i === CAREER.length - 1 ? styles.careerTop : ''}>{role}</li>
            ))}
          </ol>
          <Link to="/about" className={styles.founderLink}>Read Adrian's story →</Link>
        </aside>
      </section>

      <div className={styles.trust}>
        <ul className={styles.trustInner}>
          {TRUST.map(({ icon: Icon, text }) => (
            <li key={text}><Icon size={18} strokeWidth={2} aria-hidden="true" />{text}</li>
          ))}
        </ul>
      </div>

      <section className={s.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className={s.sectionLabel}>Solutions</div>
            <h2 className={s.sectionTitle}>Systems that fit how you work</h2>
          </div>
          <Link to="/solutions" className={styles.headLink}>All solutions →</Link>
        </div>
        <div className={styles.services}>
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.service}>
              <span className={s.cardIcon}><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${s.section} ${styles.processSection}`}>
        <div className={styles.sectionHead}>
          <div>
            <div className={s.sectionLabel}>How it works</div>
            <h2 className={s.sectionTitle}>A clear process, every time</h2>
          </div>
          <Link to="/process" className={styles.headLink}>The full process →</Link>
        </div>
        <ol className={styles.steps}>
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className={styles.stepNum}>{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className={s.ctaBanner}>
        <h2>Ready to cut the paperwork?</h2>
        <p>Book a free 30-minute call — no sales pitch, just honest advice on what would help.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a free consultation →</Link>
      </div>
    </>
  )
}
