import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { fmt } from '../data/products.js'
import Art from './Art.jsx'

export function CartLines() {
  const { items, qty, remove } = useCart()
  if (!items.length) return <p className="empty">Your order is empty. Add a drink or a bag of beans to begin.</p>
  return (
    <ul className="lines">
      {items.map((i) => (
        <li key={i.key}>
          <div className="thumb"><Art kind={i.art} /></div>
          <div className="l-info">
            <p className="l-name">{i.name}</p>
            <p className="l-price">{fmt(i.price)}</p>
            <div className="qty">
              <button type="button" aria-label={`Decrease ${i.name}`} onClick={() => qty(i.key, -1)}>−</button>
              <span aria-live="polite">{i.qty}</span>
              <button type="button" aria-label={`Increase ${i.name}`} onClick={() => qty(i.key, 1)}>+</button>
            </div>
          </div>
          <div className="l-end">
            <strong>{fmt(i.price * i.qty)}</strong>
            <button type="button" className="link-btn" onClick={() => remove(i.key)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function CartDrawer() {
  const { open, setOpen, total, count, toast } = useCart()
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [setOpen])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <div className={`scrim ${open ? 'on' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'on' : ''}`} aria-label="Your order" aria-hidden={!open} inert={!open ? '' : undefined}>
        <header>
          <h2>Your order <span>({count})</span></h2>
          <button type="button" className="icon-btn" aria-label="Close order" onClick={() => setOpen(false)}>✕</button>
        </header>
        <div className="drawer-scroll"><CartLines /></div>
        <footer>
          <div className="sum"><span>Total</span><strong>{fmt(total)}</strong></div>
          <Link to="/order" className="btn btn-primary full" onClick={() => setOpen(false)}>Go to checkout</Link>
        </footer>
      </aside>
      <div className={`toast ${toast ? 'on' : ''}`} role="status">{toast}</div>
    </>
  )
}
