import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { CartLines } from '../components/CartDrawer.jsx'
import { usePageMeta } from '../components/useReveal.js'
import { useCart } from '../context/CartContext.jsx'
import { menu, beans, gifts, fmt } from '../data/products.js'

const tabs = [['hot', 'Hot Coffee'], ['cold', 'Cold Coffee'], ['bakery', 'Bakery'], ['shop', 'Beans & Gifts']]
const pays = ['Card', 'JazzCash', 'Easypaisa', 'Cash on Pickup']

export default function Order() {
  usePageMeta('Order', 'Build your Velora order online. Demo checkout for a class project.')
  const { items, total, clear } = useCart()
  const [tab, setTab] = useState('hot')
  const [pay, setPay] = useState('Cash on Pickup')
  const [done, setDone] = useState(null)
  const [first, setFirst] = useState(false)

  const discount = first ? Math.round(total * 0.1) : 0
  const due = total - discount
  const place = () => { setDone({ total: due, pay, n: Math.floor(1000 + Math.random() * 9000) }); clear() }

  if (done) {
    return (
      <section className="section page-top">
        <div className="container narrow center success">
          <h1 className="statement sm">Order #{done.n} is confirmed.</h1>
          <p>Thanks for ordering {fmt(done.total)} with {done.pay}. Your coffee will be ready soon. This is a demo, so no payment was taken.</p>
          <button type="button" className="btn btn-primary" onClick={() => setDone(null)}>Start a new order</button>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading kicker="Order" title="Build your order" text="Add anything you like. We’ll have it ready for pickup." />
        <div className="tabs" role="tablist" aria-label="Order categories">
          {tabs.map(([id, l]) => <button key={id} role="tab" type="button" aria-selected={tab === id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>{l}</button>)}
        </div>
        <div className="order-layout">
          <div className="grid-2 order-grid" key={tab}>
            {tab !== 'shop' && menu.filter((p) => p.cat === tab).map((p, i) => <ProductCard key={p.id} p={p} delay={i * 60} />)}
            {tab === 'shop' && <>
              {beans.map((b, i) => <ProductCard key={b.id} p={b} sizes={b.prices} delay={i * 60} label="Add to Cart" />)}
              {gifts.map((g, i) => <ProductCard key={g.id} p={g} delay={(i + 3) * 60} label="Add to Cart" />)}
            </>}
          </div>
          <aside className="summary" aria-label="Order summary">
            <h2>Order summary</h2>
            <CartLines />
            {items.length > 0 && (
              <>
                <div className="sum-rows">
                  <p><span>Subtotal</span><span>{fmt(total)}</span></p>
                  {first && <p className="muted"><span>First-order offer (10%)</span><span>−{fmt(discount)}</span></p>}
                  <p className="grand"><span>Total</span><strong>{fmt(due)}</strong></p>
                </div>
                <label className="first"><input type="checkbox" checked={first} onChange={(e) => setFirst(e.target.checked)} /> This is my first Velora order (10% off)</label>
                <fieldset className="pay">
                  <legend>Payment method</legend>
                  {pays.map((p) => (
                    <label key={p} className={pay === p ? 'on' : ''}>
                      <input type="radio" name="pay" checked={pay === p} onChange={() => setPay(p)} /> {p}
                    </label>
                  ))}
                </fieldset>
                <button type="button" className="btn btn-primary full" onClick={place}>Place order</button>
                <p className="demo">Demo checkout — class project</p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
