import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import s from '../layout/modules/Page.module.css'
import styles from './modules/Pricing.module.css'

const priceFor = modules => 100 + modules * 50
const onboardingFor = modules => {
  if (modules <= 2) return 500
  if (modules <= 5) return 750
  if (modules <= 8) return 1000
  if (modules <= 11) return 1250
  return null
}
const hoursLabel = n => `${n} ${n === 1 ? 'hour' : 'hours'} of changes & tweaks per month`
const tierFor = modules => PLANS.find(p => !p.custom && modules >= p.minModules && modules <= p.maxModules)?.name

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
    onboardingDisplay: '£500',
    popular: false,
  },
  {
    name: 'Professional',
    range: '3–5 modules',
    modulesLabel: 'Up to 5 custom modules',
    minModules: 3,
    maxModules: 5,
    monthlyHours: 3,
    onboardingDisplay: '£750',
    popular: true,
  },
  {
    name: 'Advanced',
    range: '6–11 modules',
    modulesLabel: 'Up to 11 custom modules',
    minModules: 6,
    maxModules: 11,
    monthlyHours: 5,
    onboardingDisplay: '£1,000–£1,250',
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

const FAQ = [
  {
    q: 'What does onboarding cover?',
    a: <>
      <p>Setup, scoping, and the full initial build, including all the modules in your plan. It's £500 for Essential, £750 for Professional, and £1,000 (6–8 modules) or £1,250 (9–11 modules) for Advanced.</p>
      <p>You can spread your onboarding across 6 months at no extra cost. Your tier's module count is yours to use — build them all at signup, or save some to add later as your business grows. We'll help you plan ahead during your free consultation.</p>
    </>,
  },
  {
    q: "What's included in my monthly hours?",
    a: <p>Small tweaks, wording or content updates, layout adjustments, report customisations, and minor feature additions all count toward your monthly hours allowance.</p>,
  },
  {
    q: "What's always free?",
    a: <p>Bug fixes, security updates, and hosting issues — if something we built isn't working as it should, that's on us to fix.</p>,
  },
  {
    q: "What's quoted separately?",
    a: <p>Going beyond your plan's module count, third-party integrations, and high-volume usage. Standard hosting is included on every plan; if your usage grows beyond typical levels (large data volumes, lots of file uploads, very high traffic), your monthly rate may be adjusted to cover the extra infrastructure cost. We'll always show you the numbers and agree before any change.</p>,
  },
  {
    q: 'Is there a minimum term, and how do I cancel?',
    a: <p>Each plan has a short initial commitment — 1 month on Essential, 3 months on Professional, 6 months on Advanced — so we can cover the build-out properly. After that, your plan rolls month-to-month. To cancel, give us 30 days' notice; you can give notice during your minimum term, so your contract ends cleanly the moment the term completes. You'll always get your data exported and handed back. The system itself (the code) stays with us.</p>,
  },
  {
    q: 'Can I own the code outright?',
    a: <p>It's possible — talk to us about a long-term ownership arrangement, and we'll work out terms that suit your business.</p>,
  },
]

export default function Pricing() {
  const [modules, setModules] = useState(3)
  const price = priceFor(modules)

  return (
    <>
      <div className={`${s.pageHero} ${styles.hero}`}>
        <h1>Simple monthly pricing</h1>
        <p>Pick how many modules you need. Every plan includes unlimited users, hosting and support.</p>
      </div>

      <section className={s.section} style={{ paddingTop: 0 }}>

        <div className={styles.sliderBox}>
          <div className={styles.sliderRow}>
            <label htmlFor="modules" className={styles.sliderLabel}>Modules: <strong>{modules}</strong> — <strong>{tierFor(modules)}</strong> tier</label>
            <div className={styles.sliderTrack}>
              <input
                id="modules"
                type="range"
                min={1}
                max={11}
                value={modules}
                onChange={e => setModules(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderTicks} aria-hidden="true">
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

        <div className={styles.includes}>
          <span className={styles.includesTitle}>Every plan includes</span>
          <ul>
            {SHARED_FEATURES.map(feature => (
              <li key={feature}><Check size={16} strokeWidth={2.5} aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.plans}>
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`${styles.planCard} ${plan.popular ? styles.planPopular : ''} ${plan.custom ? styles.planEnterprise : ''} ${tierFor(modules) === plan.name ? styles.planActive : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className={styles.planRange}>{plan.range}</p>

              {plan.custom ? (
                <div className={styles.planPriceCustom}>Custom quote</div>
              ) : (
                <div className={styles.planPrice}>
                  £{priceFor(plan.minModules)}–£{priceFor(plan.maxModules)}
                  <span>/mo</span>
                </div>
              )}
              <div className={styles.onboardingLine}>
                Onboarding: <strong>{plan.onboardingDisplay}</strong>
              </div>

              <ul className={styles.featureList}>
                <li><Check size={16} strokeWidth={2.5} aria-hidden="true" />{plan.modulesLabel}</li>
                <li><Check size={16} strokeWidth={2.5} aria-hidden="true" />{plan.custom ? 'Custom monthly support hours' : hoursLabel(plan.monthlyHours)}</li>
              </ul>

              <Link
                to="/contact"
                className={plan.popular ? styles.btnPopular : `${s.btn} ${s.btnSecondary} ${styles.btnPlan}`}
              >
                {plan.custom ? 'Request a quote →' : 'Get started →'}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.faq}>
          <h2 className={styles.faqTitle}>Common questions</h2>
          {FAQ.map(item => (
            <details key={item.q} className={styles.faqItem}>
              <summary>{item.q}</summary>
              <div className={styles.faqAnswer}>{item.a}</div>
            </details>
          ))}
        </div>

      </section>

      <div className={s.ctaBanner}>
        <h2>Ready to get started?</h2>
        <p>Onboarding from £500 (or 6 monthly payments), then a simple subscription with no hidden costs.</p>
        <Link to="/contact" className={`${s.btn} ${s.btnWhite}`}>Book a free consultation →</Link>
      </div>
    </>
  )
}
