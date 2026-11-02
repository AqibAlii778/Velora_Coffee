import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { usePageMeta } from '../components/useReveal.js'
import { beans, gifts, subs } from '../data/products.js'

export default function Shop() {
  usePageMeta('Shop', 'Shop Velora small-batch coffee beans, gift boxes and monthly subscriptions.')
  return (
    <>
      <section className="section page-top">
        <div className="container">
          <SectionHeading kicker="Shop" title="Coffee beans" text="Roasted in small batches and shipped within two days. Choose 250g for a month, 1kg for a household." />
          <div className="grid-3">
            {beans.map((b, i) => <ProductCard key={b.id} p={b} sizes={b.prices} delay={i * 80} label="Add to Cart" />)}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <SectionHeading title="Gift boxes" text="Wrapped, ribboned and ready to give." />
          <div className="grid-2">{gifts.map((g, i) => <ProductCard key={g.id} p={g} delay={i * 80} label="Add to Cart" />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Subscriptions" text="Never run out. Skip, pause or cancel anytime." />
          <div className="grid-2">{subs.map((g, i) => <ProductCard key={g.id} p={g} delay={i * 80} label="Subscribe" />)}</div>
        </div>
      </section>
    </>
  )
}
