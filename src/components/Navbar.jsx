import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { useCart } from '../context/CartContext.jsx'

const links = [['/menu', 'Menu'], ['/shop', 'Shop'], ['/story', 'Our Story'], ['/locations', 'Locations'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { count, setOpen: openCart } = useCart()
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.classList.toggle('no-scroll', open) }, [open])

  return (
    <header className={`nav ${solid || open ? 'solid' : ''}`}>
      <div className="nav-in container">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>
          ))}
          <NavLink to="/rewards" className={({ isActive }) => `rewards-link ${isActive ? 'active' : ''}`}>Rewards</NavLink>
        </nav>
        <div className="nav-actions">
          <button type="button" className="cart-btn" onClick={() => openCart(true)} aria-label={`Open order, ${count} items`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>
            {count > 0 && <b key={count} className="badge">{count}</b>}
          </button>
          <Button to="/order" className="nav-order">Order Now</Button>
          <button type="button" className={`burger ${open ? 'x' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
