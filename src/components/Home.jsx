import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTag}>Based in the UK</div>
        <h1>Smarter systems.<br />Better <em>decisions</em>.</h1>
        <p>We build intelligent systems and websites that help teams move faster, cut manual work, and get clarity on what matters.</p>
        <div className={styles.heroActions}>
          <Link to="/contact" className={`${s.btn} ${s.btnPrimary}`}>Book a Consultation →</Link>
          <Link to="/solutions" className={`${s.btn} ${s.btnSecondary}`}>See our solutions</Link>
        </div>
      </section>

      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div><div className={styles.statNum}>50+</div><div className={styles.statLabel}>Projects delivered</div></div>
          <div><div className={styles.statNum}>100%</div><div className={styles.statLabel}>Client satisfaction</div></div>
          <div><div className={styles.statNum}>5+</div><div className={styles.statLabel}>Years experience</div></div>
          <div><div className={styles.statNum}>48hr</div><div className={styles.statLabel}>Avg. response time</div></div>
        </div>
      </div>

      <section className={s.section}>
        <div className={s.sectionLabel}>What we do</div>
        <h2 className={s.sectionTitle}>Solutions built for your team</h2>
        <p className={s.sectionSubtitle}>From custom CRMs to analytics dashboards — tools that actually fit how you work.</p>
        <div className={s.grid3}>
          <div className={s.card}><span className={s.cardIcon}>⚙️</span><h3>Custom Systems</h3><p>CRMs, internal portals, admin panels, and specialised apps that fit your workflow.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📊</span><h3>Analytics & KPIs</h3><p>Dashboards that give clarity: sales, operations, service performance in one place.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🌐</span><h3>Websites & Web Apps</h3><p>Professional, responsive websites. From landing pages to client portals.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔗</span><h3>Integrations & Automation</h3><p>Connect tools, reduce manual work, and automate data flows securely.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔍</span><h3>Discovery & Audits</h3><p>Short, focused engagements to map processes and identify improvements.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🧪</span><h3>Prototyping</h3><p>Validate ideas quickly with working prototypes and tight feedback loops.</p></div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Link to="/solutions" className={`${s.btn} ${s.btnSecondary}`}>View all solutions →</Link>
        </div>
      </section>

      <div className={s.divider} />

      <section className={s.section}>
        <div className={s.sectionLabel}>How we work</div>
        <h2 className={s.sectionTitle}>A clear process, every time</h2>
        <p className={s.sectionSubtitle}>No guesswork. We follow a proven process to deliver exactly what you need.</p>
        <div className={s.grid3}>
          <div className={s.card}><span className={s.cardIcon}>🗺️</span><h3>1. Discover</h3><p>We map your current processes, identify bottlenecks, and define what success looks like.</p></div>
          <div className={s.card}><span className={s.cardIcon}>✏️</span><h3>2. Design</h3><p>Wireframes and prototypes before a single line of code is written.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🚀</span><h3>3. Deliver</h3><p>Iterative builds with regular check-ins. You see progress every step of the way.</p></div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Link to="/process" className={`${s.btn} ${s.btnSecondary}`}>Learn about our process →</Link>
        </div>
      </section>

      <div className={s.ctaBanner}>
        <h2>Ready to move faster?</h2>
        <p>Book a free 30-minute consultation — no commitment, just clarity.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a Consultation →</Link>
      </div>
    </>
  )
}
