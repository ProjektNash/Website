import { Link } from 'react-router-dom'
import styles from './modules/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>ProjektNash</div>
            <div className={styles.tagline}>Intelligent systems & websites.</div>
          </div>
          <div className={styles.links}>
            <div className={styles.col}>
              <h4>Services</h4>
              <ul>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/process">Process Improvement</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Projekt Nash. All rights reserved.</p>
          <a href="mailto:adrian@projektnash.co.uk" className={styles.email}>adrian@projektnash.co.uk</a>
        </div>
      </div>
    </footer>
  )
}
