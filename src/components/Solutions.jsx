import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import { SERVICES } from '../data/services'

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
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={s.card}>
              <span className={s.cardIcon}><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
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
