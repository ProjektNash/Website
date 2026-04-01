import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTag}>Based in the UK</div>
        <h1>Smarter systems.<br />Better <em>decisions</em>.</h1>
        <p>We build systems that help teams move faster, cut manual work, and get clarity on what matters.</p>
        <div className={styles.heroActions}>
          <Link to="/contact" className={`${s.btn} ${s.btnPrimary}`}>Book a Consultation →</Link>
          <Link to="/solutions" className={`${s.btn} ${s.btnSecondary}`}>See our solutions</Link>
        </div>
      </section>


      <section className={s.section}>
        <div className={s.sectionLabel}>What we do</div>
        <h2 className={s.sectionTitle}>Solutions built for your team</h2>
        <p className={s.sectionSubtitle}>From custom CRMs to analytics dashboards — tools that actually fit how you work.</p>
        <div className={s.grid3}>
          <div className={s.card}><span className={s.cardIcon}>⚙️</span><h3>Production & Operations Tracking</h3><p>Real-time job tracking, shift logs, and production dashboards — built around how your floor actually runs.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📦</span><h3>Inventory & Stock Management</h3><p>Custom stock control, goods-in/out tracking, and low-stock alerts without the complexity of a full ERP.</p></div>
          <div className={s.card}><span className={s.cardIcon}>👥</span><h3>Workforce & Absence Management</h3><p>Absence planners, rota tools, and team management systems built for shift-based businesses.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔧</span><h3>Maintenance & Asset Tracking</h3><p>Log faults, schedule maintenance, and track assets across your site — no more spreadsheets.</p></div>
          <div className={s.card}><span className={s.cardIcon}>✅</span><h3>Safety & Compliance Tools</h3><p>Digital checklists, incident reporting, and audit trails that keep your team compliant and your records clean.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📊</span><h3>Reporting & KPI Dashboards</h3><p>Live dashboards pulling your operational data into one place — built for managers, not IT teams.</p></div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <Link to="/solutions" className={`${s.btn} ${s.btnSecondary}`}>View all solutions →</Link>
        </div>
      </section>

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
