import { Link } from 'react-router-dom'
import s from '../layout/modules/Page.module.css'

export default function NotFound() {
  return (
    <div className={s.pageHero}>
      <div className={s.sectionLabel}>404</div>
      <h1>Page not found</h1>
      <p style={{ marginBottom: '32px' }}>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className={`${s.btn} ${s.btnPrimary}`}>Back to home →</Link>
    </div>
  )
}
