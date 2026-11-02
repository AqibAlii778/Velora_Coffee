import { Link } from 'react-router-dom'

// Replace by adding src/assets/velora-logo.svg — it is picked up automatically.
const found = import.meta.glob('../assets/velora-logo.svg', { eager: true, query: '?url', import: 'default' })
const logoUrl = Object.values(found)[0]

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Velora Coffee Co. home">
      {logoUrl ? <img src={logoUrl} alt="Velora" height="28" /> : <span>VELORA</span>}
    </Link>
  )
}
