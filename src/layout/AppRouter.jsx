import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../components/Home'
import Solutions from '../components/Solutions'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import styles from './modules/Layout.module.css'

export default function AppRouter() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
