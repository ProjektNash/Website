import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'

export default function Solutions() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>What we do</div>
        <h1>Solutions</h1>
        <p>We build systems that help teams move faster and make better decisions.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.grid3}>
          <div className={s.card}><span className={s.cardIcon}>⚙️</span><h3>Production & Operations Tracking</h3><p>Real-time job tracking, shift logs, and production dashboards — built around how your floor actually runs.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📦</span><h3>Inventory & Stock Management</h3><p>Custom stock control, goods-in/out tracking, and low-stock alerts without the complexity of a full ERP.</p></div>
          <div className={s.card}><span className={s.cardIcon}>👥</span><h3>Workforce & Absence Management</h3><p>Absence planners, rota tools, and team management systems built for shift-based businesses.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔧</span><h3>Maintenance & Asset Tracking</h3><p>Log faults, schedule maintenance, and track assets across your site — no more spreadsheets.</p></div>
          <div className={s.card}><span className={s.cardIcon}>✅</span><h3>Safety & Compliance Tools</h3><p>Digital checklists, incident reporting, and audit trails that keep your team compliant and your records clean.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📊</span><h3>Reporting & KPI Dashboards</h3><p>Live dashboards pulling your operational data into one place — built for managers, not IT teams.</p></div>
        </div>
      </section>

      <div className={s.ctaBanner}>
        <h2>Not sure which solution fits?</h2>
        <p>Book a free consultation and we'll help you figure out the right approach.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a Consultation →</Link>
      </div>
    </>
  )
}
