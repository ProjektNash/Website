import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './modules/Navbar.module.css'
import logo from '../assets/PNLogo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src={logo} alt="ProjektNash" className={styles.logoImg} />
        </NavLink>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><NavLink to="/solutions" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Solutions</NavLink></li>
          <li><NavLink to="/process" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Process Improvement</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Portfolio</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/pricing" className={({ isActive }) => isActive ? styles.active : ''} onClick={() => setOpen(false)}>Pricing</NavLink></li>
          <li><NavLink to="/contact" className={styles.cta} onClick={() => setOpen(false)}>Book a Consultation</NavLink></li>
        </ul>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
