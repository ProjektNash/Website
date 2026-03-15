import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/About.module.css'

export default function About() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>Who I am</div>
        <h1>About ProjektNash</h1>
        <p>My name is Adrian Nash-Morris. I started ProjektNash because I got tired of waiting for software that never quite did what I needed.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>From the production floor to writing the code myself</h2>
            <p>Programming started as a hobby. But when requesting updates to systems I was using became painful — long waiting times, developers who didn't quite get what I meant — I decided to rebuild one from scratch myself. That's when I realised I had a knack for it.</p>
            <p>My background is in production management. I understand how businesses actually operate — where the paperwork piles up, where information gets lost, and where the real bottlenecks are hiding. That process improvement mindset translates directly into how I build software: identify the problem first, then build exactly what's needed to fix it.</p>
            <p>When you work with me, you're talking directly to the person who understands both your environment and the code. No middlemen, no misinterpretation, no waiting around.</p>
            <ul className={styles.values}>
              <li>Production management background — I know where problems hide</li>
              <li>I remove paperwork and manual processes, not just digitise them</li>
              <li>I map the problem properly before touching a keyboard</li>
              <li>Direct communication — you'll never be left wondering where things stand</li>
              <li>UK-based and accountable</li>
            </ul>
          </div>

          <div>
            <div className={s.card} style={{ marginBottom: '20px' }}>
              <span className={s.cardIcon}>🏭</span>
              <h3>Process improvement first</h3>
              <p>My production management experience means I understand how to find where problems actually are — not just where they appear to be.</p>
            </div>
            <div className={s.card} style={{ marginBottom: '20px' }}>
              <span className={s.cardIcon}>💡</span>
              <h3>Built from frustration</h3>
              <p>ProjektNash exists because I got fed up waiting for developers who didn't understand what I needed. Now I build exactly what's required — efficiently, and without the back and forth.</p>
            </div>
            <div className={s.card}>
              <span className={s.cardIcon}>📍</span>
              <h3>Based in the UK</h3>
              <p>UK-based, working primarily with UK businesses — same timezone, same context, no communication lag.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={s.ctaBanner}>
        <h2>Let's work together</h2>
        <p>Book a free 30-minute call and let's talk about what you need.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Get in touch →</Link>
      </div>
    </>
  )
}
