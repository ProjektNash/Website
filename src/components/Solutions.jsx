import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'

export default function Solutions() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>What we do</div>
        <h1>Solutions</h1>
        <p>We build intelligent systems and websites that help teams move faster and make better decisions.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={s.grid3}>
          <div className={s.card}><span className={s.cardIcon}>⚙️</span><h3>Custom Systems</h3><p>CRMs, internal portals, admin panels, and specialised apps. Built for exactly how your team operates.</p></div>
          <div className={s.card}><span className={s.cardIcon}>📊</span><h3>Analytics & KPIs</h3><p>Dashboards that give clarity: sales, operations, service performance in one place.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🌐</span><h3>Websites & Web Apps</h3><p>Professional, responsive websites. From landing pages to client portals — fast, accessible, built to convert.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔗</span><h3>Integrations & Automation</h3><p>Connect tools, reduce manual work, and automate data flows securely.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🔍</span><h3>Discovery & Audits</h3><p>Short, focused engagements to map processes and identify improvements.</p></div>
          <div className={s.card}><span className={s.cardIcon}>🧪</span><h3>Prototyping</h3><p>Validate ideas quickly with working prototypes and tight feedback loops.</p></div>
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
