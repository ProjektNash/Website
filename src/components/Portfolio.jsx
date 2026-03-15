import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Portfolio.module.css'

const projects = [
  { id: 1, tag: 'Manufacturing', title: 'Manufacturing System', desc: 'End-to-end production tracking managing work orders, machine status, and output — giving the shop floor and management real-time visibility.', icon: '🏭', wide: true },
  { id: 2, tag: 'Sales', title: 'Sales Document System', desc: 'Automated quote and proposal generation pulling live pricing and product data — cutting turnaround from hours to minutes.', icon: '📄', wide: false },
  { id: 3, tag: 'Warehouse', title: 'Warehouse Management System', desc: 'Custom WMS handling stock intake, location tracking, pick & pack, and despatch — replacing spreadsheets and paper processes.', icon: '📦', wide: false },
  { id: 4, tag: 'Maintenance', title: 'Maintenance System', desc: 'Planned and reactive maintenance management with asset registers, job scheduling, and engineer job cards — reducing downtime.', icon: '🔧', wide: true },
  { id: 5, tag: 'Scheduling', title: 'Scheduling Board', desc: 'Visual drag-and-drop scheduling board managing staff, jobs, and resources across multiple sites — replacing whiteboards.', icon: '📅', wide: true },
]

export default function Portfolio() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>Our work</div>
        <h1>Portfolio</h1>
        <p>A selection of systems we've delivered — built around how your business actually operates.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          {projects.map(p => (
            <div key={p.id} className={`${styles.card} ${p.wide ? styles.wide : ''}`}>
              <div className={styles.thumb}>{p.icon}</div>
              <div className={styles.info}>
                <span className={styles.tag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>More case studies coming soon. Book a call to discuss your project.</p>
          <Link to="/contact" className={`${s.btn} ${s.btnPrimary}`}>Start a conversation →</Link>
        </div>
      </section>
    </>
  )
}
