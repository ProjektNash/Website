import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/About.module.css'

export default function About() {
  return (
    <>
      <div className={s.pageHero}>
        <div className={s.sectionLabel}>Who I am</div>
        <h1>About ProjektNash</h1>
        <p>I'm Adrian Nash-Morris. I started my career mopping floors — and spent eleven years working my way through almost every role a manufacturing operation has to offer before founding ProjektNash.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>From mopping floors to building the tools I always wished existed</h2>
            <p>Not metaphorically. I was the guy cleaning the facility. From there I worked the packaging lines, moved stock around the warehouse, stood at mixing vessels manufacturing product, chased production schedules through planning, and scrutinised batch records in quality assurance. I earned my NEBOSH certificate along the way. The last two of those years I spent managing production.</p>
            <p>Every step of that journey taught me something the job title never could. I know what it's like to be on the floor when a process breaks down. I know the frustration of working around software that was clearly designed by someone who had never set foot in a warehouse. I've been the person raising the problem, and I've been the person responsible for fixing it.</p>
            <p>ProjektNash exists because I believed there was a better way to build operational software — built around the way a manufacturer actually works, not the other way around. Flexible enough to fit the operation, not force the operation to fit it. And that someone with eleven years on the inside was exactly the right person to build it. So I did.</p>
            <ul className={styles.values}>
              <li>Eleven years inside manufacturing — I know where problems hide</li>
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
              <p>From the warehouse floor to the production office — eleven years of operational experience means I understand how to find where problems actually are, not just where they appear to be.</p>
            </div>
            <div className={s.card} style={{ marginBottom: '20px' }}>
              <span className={s.cardIcon}>⚙️</span>
              <h3>Built around your operation</h3>
              <p>Every system is built to fit the way you work — flexible enough to match your processes, not rigid enough to force you to change them.</p>
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