import Button from '../components/Button.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Marquee from '../components/Marquee.jsx'
import { usePageMeta } from '../components/useReveal.js'
import { featured } from '../data/products.js'

const points = [
  ['Direct-trade beans', 'We pay farmers above market price and know every lot by name.'],
  ['Small-batch roasting', 'Roasted in batches of 12kg so every bag gets our full attention.'],
  ['Fresh coffee', 'Roasted to order and sent within two days, never sitting on a shelf.'],
  ['Craftsmanship', 'Baristas trained for six weeks before they pull a shot for you.'],
]
const quotes = [
  ['The Velora Latte is the first thing I order on the way to campus. It tastes like someone cared.', 'Sample review, Ayesha K.'],
  ['Their Colombia beans changed our office coffee. Nobody asks for instant anymore.', 'Sample review, Hamza R.'],
  ['Calm room, great light, and a croissant that actually crunches. My new study spot.', 'Sample review, Mehreen S.'],
]

export default function Home() {
  usePageMeta('', 'Velora Coffee Co. — premium small-batch roasted coffee, crafted to awaken every moment.')
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-brand">VELORA</p>
            <h1><span>Awaken</span> <span>every</span> <span>moment.</span></h1>
            <p className="hero-sub">Small-batch roasted coffee, delivered fresh.</p>
            <div className="hero-cta">
              <Button to="/order">Order Now</Button>
              <Button to="/menu" variant="ghost">Explore Menu</Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="arch"><Photo name="hero" alt="A Velora latte with heart-shaped latte art" art="latte" eager /></div>
            <svg className="badge-ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs><path id="ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
              <text><textPath href="#ring">Brewed to be felt • Brewed to be felt • </textPath></text>
            </svg>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container">
          <SectionHeading kicker="Our favourites" title="Three reasons to come back" text="Pour-overs, ice and ribbon. Start with the cups people ask for by name." />
          <div className="grid-3">
            {featured.map((p, i) => <ProductCard key={p.id} p={p} delay={i * 90} label={p.id === 'giftbox' ? 'Add to Cart' : 'Add to Order'} />)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <Reveal className="split-img"><div className="arch"><Photo name="farm" alt="Coffee-growing hills at golden hour" art="farm" /></div></Reveal>
          <div>
            <SectionHeading tone="light" kicker="Our story" title="From farm to cup" text="Every Velora bag can be traced to the hands that grew it. We buy directly, roast carefully and pour with patience." />
            <ul className="points">
              {points.map(([t, d], i) => (
                <Reveal as="li" key={t} delay={i * 80}><h3>{t}</h3><p>{d}</p></Reveal>
              ))}
            </ul>
            <Button to="/story" variant="peach">Our Story</Button>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <Reveal className="container">
          <p className="big-quote">Coffee should feel like a pause worth having.</p>
          <p className="quote-by">The Velora experience</p>
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="Kind words" title="Poured into our regulars" />
          <div className="grid-3 quotes">
            {quotes.map(([q, by], i) => (
              <Reveal as="figure" key={by} delay={i * 90} className="quote"><blockquote>{q}</blockquote><figcaption>{by}</figcaption></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <SectionHeading kicker="@velora.coffee" title="Moments from our counters" />
          <div className="insta">
            {[['latte', 'latte'], ['cold', 'coldbrew'], ['pastry', 'croissant'], ['beans', 'ethiopia'], ['room', 'interior'], ['box', 'giftbox']].map(([art, n], i) => (
              <Reveal key={n} delay={i * 60} className="insta-tile"><Photo name={n} art={art} alt={`Velora ${n} moment`} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="container club">
          <div>
            <h2>Join the Velora Club</h2>
            <p>Get 10% off your first order.</p>
          </div>
          <Button to="/rewards" variant="peach">Join the Club</Button>
        </Reveal>
      </section>
    </>
  )
}
