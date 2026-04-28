import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Pricing.module.css'

const priceFor = modules => 250 + modules * 50
const onboardingFor = modules => {
  if (modules <= 2) return 1000
  if (modules <= 5) return 1500
  if (modules <= 8) return 2000
  if (modules <= 11) return 2500
  return null
}
const hoursLabel = n => `${n} ${n === 1 ? 'hour' : 'hours'} of changes & tweaks per month`

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
    monthlyHours: 2,
    onboardingDisplay: '£1,000',
    popular: false,
  },
  {
    name: 'Professional',
    range: '3–5 modules',
    modulesLabel: 'Up to 5 custom modules',
    minModules: 3,
    maxModules: 5,
    monthlyHours: 3,
    onboardingDisplay: '£1,500',
    popular: true,
  },
  {
    name: 'Advanced',
    range: '6–11 modules',
    modulesLabel: 'Up to 11 custom modules',
    minModules: 6,
    maxModules: 11,
    monthlyHours: 5,
    onboardingDisplay: '£2,000 (6-8 modules) / £2,500 (9-11 modules)',
    popular: false,
  },
  {
    name: 'Enterprise',
    range: '12+ modules',
    modulesLabel: '12+ custom modules',
    onboardingDisplay: 'Quoted with project',
    popular: false,
    custom: true,
  },
]

export default function Pricing() {
  const [modules, setModules] = useState(3)
  const price = priceFor(modules)

  return (
    <>
      <div className={s.pageHero} style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1>Pricing</h1>
      </div>

      <section className={s.section} style={{ paddingTop: 0, maxWidth: '1400px' }}>

        <div className={styles.sliderBox}>
          <div className={styles.sliderRow}>
            <span className={styles.sliderLabel}>Modules: <strong>{modules}</strong></span>
            <div className={styles.sliderTrack}>
              <input
                type="range"
                min={1}
                max={11}
                value={modules}
                onChange={e => setModules(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderTicks}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
                  <span key={n} className={n === modules ? styles.tickActive : ''}>{n}</span>
                ))}
              </div>
            </div>
            <div className={styles.sliderPriceBlock}>
              <span className={styles.sliderPrice}>£{price}<span>/mo</span></span>
              <span className={styles.sliderOnboarding}>+ £{onboardingFor(modules).toLocaleString('en-GB')} onboarding</span>
            </div>
          </div>
        </div>

        <div className={styles.onboarding}>
          <strong>One-time onboarding: from £1,000</strong> — covers setup, scoping, and the full initial build, including all the modules in your plan. Onboarding scales with your plan: £1,000 for Essential, £1,500 for Professional, £2,000-£2,500 for Advanced.
          <div style={{ marginTop: '6px', fontSize: '0.82rem', opacity: 0.75, fontWeight: 300 }}>
            Spread your onboarding across 6 months at no extra cost. Your tier's module count is yours to use — build them all at signup, or save some to add later as your business grows. We'll help you plan ahead during your free consultation.
          </div>
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
                  <div className={styles.onboardingLine}>
                    Onboarding: <strong>{plan.onboardingDisplay}</strong>
                  </div>
                  <p className={styles.enterpriseNote}>
                    Every large-scale deployment is different. We'll scope the project with you and provide a tailored monthly rate and build cost.
                  </p>
                  <ul className={styles.featureList}>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      {plan.modulesLabel}
                    </li>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      Custom monthly support hours
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
                    £{priceFor(plan.minModules)}–£{priceFor(plan.maxModules)}
                    <span>/mo</span>
                  </div>
                  <div className={styles.onboardingLine}>
                    Onboarding: <strong>{plan.onboardingDisplay}</strong>
                  </div>
                  <ul className={styles.featureList}>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      {plan.modulesLabel}
                    </li>
                    <li className={styles.featureHighlight}>
                      <span className={styles.check}>✓</span>
                      {hoursLabel(plan.monthlyHours)}
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
                </>
              )}
            </div>
          ))}
        </div>

        <div className={styles.termNote}>
          <strong>Minimum term:</strong> 3 months on Essential, 6 months on Professional, 12 months on Advanced. After that, your retainer rolls month-to-month. To cancel, give 30 days' notice — you can give notice during your minimum term, so your contract ends cleanly the moment the term completes.
        </div>

        <div className={styles.hoursNote}>
          <p><strong>What's included in your hours?</strong> Small tweaks, wording or content updates, layout adjustments, report customisations, and minor feature additions all count toward your monthly hours allowance.</p>
          <p><strong>What's always free?</strong> Bug fixes, security updates, and hosting issues — if something we built isn't working as it should, that's on us to fix.</p>
          <p><strong>What's quoted separately?</strong> Going beyond your plan's module count, third-party integrations, and high-volume usage. Standard hosting is included on every plan; if your usage grows beyond typical levels (large data volumes, lots of file uploads, very high traffic), your monthly rate may be adjusted to cover the extra infrastructure cost. We'll always show you the numbers and agree before any change.</p>
        </div>

        <div className={styles.exitOptions}>
          <h3 className={styles.exitOptionsHeading}>Flexible terms — short minimum, then month-to-month</h3>
          <p className={styles.exitOptionsIntro}>
            Each plan has a short initial commitment (3 months on Essential, 6 months on Professional, 12 months on Advanced) so we can cover the build-out properly. After that, your retainer rolls month-to-month. To cancel, give us 30 days' notice — you can give notice during your minimum term, so your contract ends cleanly the moment the term completes. You'll always get your data exported and handed back. The system itself (the code) stays with us.
          </p>
          <p className={styles.exitOptionsIntro}>
            <strong>Want to own the code outright?</strong> It's possible — talk to us about a long-term ownership arrangement, and we'll work out terms that suit your business.
          </p>
        </div>

      </section>

      <div className={s.ctaBanner}>
        <h2>Ready to get started?</h2>
        <p>Onboarding from £1,000 (or 6 monthly payments), then a simple subscription with no hidden costs.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a free consultation →</Link>
      </div>
    </>
  )
}
