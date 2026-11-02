import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <Logo light />
          <p className="foot-tag">Awaken Every Moment.</p>
          <p className="foot-small">velora.coffee<br />@velora.coffee<br />hello@velora.coffee</p>
        </div>
        <nav aria-label="Explore">
          <h2>Explore</h2>
          <Link to="/menu">Menu</Link><Link to="/shop">Shop</Link><Link to="/story">Our Story</Link>
          <Link to="/locations">Locations</Link><Link to="/rewards">Rewards</Link>
        </nav>
        <nav aria-label="Company">
          <h2>Company</h2>
          <Link to="/story">About</Link><Link to="/contact">Contact</Link>
          <Link to="/contact">Careers</Link><Link to="/contact">Franchise</Link><Link to="/contact">Privacy</Link>
        </nav>
        <div>
          <h2>Open daily</h2>
          <p className="foot-small">8am – 12am<br />Clifton · DHA · Gulshan</p>
        </div>
      </div>
      <div className="container foot-bottom">
        <p>© {new Date().getFullYear()} Velora Coffee Co. A class project — not a real business.</p>
      </div>
    </footer>
  )
}
