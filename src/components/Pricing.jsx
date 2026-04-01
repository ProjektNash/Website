import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Pricing.module.css'

const PRICES = [0, 300, 350, 400, 450, 500, 550, 600]

const SHARED_FEATURES = [
  'Unlimited users — no per-seat fees',
  'Hosted & maintained by ProjektNash',
  'Custom built for your workflow',
  'MongoDB database included',
  'Dedicated support',
  'Custom reporting dashboard',
]

const PLANS = [
  {
    name: 'Essential',
    range: '1–2 modules',
    modulesLabel: 'Up to 2 custom modules',
    minModules: 1,
    maxModules: 2,
    popular: false,
  },
  {
    name: 'Professional',
    range: '3–5 modules',
    modulesLabel: 'Up to 5 custom modules',
    minModules: 3,
    maxModules: 5,
    popular: true,
  },
  {
    name: 'Advanced',
    range: '6–7 modules',
    modulesLabel: 'Up to 7 custom modules',
    minModules: 6,
    maxModules: 7,
    popular: false,
    advancedNote: true,
  },
  {
    name: 'Enterprise',
    range: '12+ modules',
    modulesLabel: '12+ custom modules',
    popular: false,
    custom: true,
  },
]

export default function Pricing() {
  const [modules, setModules] = useState(3)
  const price = PRICES[modules]

  return (
    <>
      <div className={s.pageHero} style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1>Pricing</h1>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>

        <div className={styles.sliderBox}>
          <div className={styles.sliderRow}>
            <span className={styles.sliderLabel}>Modules: <strong>{modules}</strong></span>
            <div className={styles.sliderTrack}>
              <input
                type="range"
                min={1}
                max={7}
                value={modules}
                onChange={e => setModules(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderTicks}>
                {[1, 2, 3, 4, 5, 6, 7].map(n => (
                  <span key={n} className={n === modules ? styles.tickActive : ''}>{n}</span>
                ))}
              </div>
            </div>
            <span className={styles.sliderPrice}>£{price}<span>/mo</span></span>
          </div>
        </div>

        <div className={styles.onboarding}>
          <strong>One-time onboarding fee: £1,000</strong> — covers setup and initial build. No surprises.
        </div>

        <div className={styles.plans}>
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`${styles.planCard} ${plan.popular ? styles.planPopular : ''} ${plan.custom ? styles.planEnterprise : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className={styles.planRange}>{plan.range}</p>

              {plan.custom ? (
                <>
                  <div className={styles.planPriceCustom}>Custom quote</div>
                  <p className={styles.enterpriseNote}>
                    Every large-scale deployment is different. We'll scope the project with you and provide a tailored monthly rate and build cost.
                  </p>
                  <ul className={styles.featureList}>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      {plan.modulesLabel}
                    </li>
                    {SHARED_FEATURES.map(feature => (
                      <li key={feature}>
                        <span className={styles.check}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`${s.btn} ${s.btnSecondary}`} style={{ width: '100%', justifyContent: 'center' }}>
                    Request a quote →
                  </Link>
                </>
              ) : (
                <>
                  <div className={styles.planPrice}>
                    £{PRICES[plan.minModules]}–£{PRICES[plan.maxModules]}
                    <span>/mo</span>
                  </div>
                  <ul className={styles.featureList}>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      {plan.modulesLabel}
                    </li>
                    {SHARED_FEATURES.map(feature => (
                      <li key={feature}>
                        <span className={styles.check}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.popular ? (
                    <Link to="/contact" className={styles.btnPopular}>
                      Get started →
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className={`${s.btn} ${s.btnSecondary}`}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Get started →
                    </Link>
                  )}
                  {plan.advancedNote && (
                    <p className={styles.advancedNote}>
                      Need 8–12 modules? Monthly stays capped at £600. Additional modules are quoted as a one-time build cost. Above 12 falls under Enterprise.
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

      </section>

      <div className={s.ctaBanner}>
        <h2>Ready to get started?</h2>
        <p>One-time £1,000 onboarding fee, then a simple monthly subscription with no hidden costs.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a free consultation →</Link>
      </div>
    </>
  )
}
