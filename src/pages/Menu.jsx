import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { usePageMeta } from '../components/useReveal.js'
import { menu } from '../data/products.js'

export const cats = [['hot', 'Hot Coffee'], ['cold', 'Cold Coffee'], ['bakery', 'Bakery']]

export default function Menu() {
  usePageMeta('Menu', 'Explore Velora’s menu: hot coffee, cold coffee and fresh bakery, made to order.')
  const [cat, setCat] = useState('hot')
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading kicker="The menu" title="Made slowly, served warm" text="Pick a category. Every drink is built by hand with beans roasted this week." />
        <div className="tabs" role="tablist" aria-label="Menu categories">
          {cats.map(([id, label]) => (
            <button key={id} role="tab" type="button" aria-selected={cat === id} className={cat === id ? 'on' : ''} onClick={() => setCat(id)}>{label}</button>
          ))}
        </div>
        <div className="grid-3" key={cat} role="tabpanel">
          {menu.filter((p) => p.cat === cat).map((p, i) => <ProductCard key={p.id} p={p} delay={i * 70} />)}
        </div>
      </div>
    </section>
  )
}
