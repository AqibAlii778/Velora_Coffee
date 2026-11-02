import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { usePageMeta } from '../components/useReveal.js'

export default function Rewards() {
  usePageMeta('Rewards', 'Velora Rewards: earn 1 point per PKR 100, a free drink every 10 visits and 10% off your first order.')
  const [spend, setSpend] = useState(2600)
  const pts = Math.floor((Number(spend) || 0) / 100)
  return (
    <>
      <section className="section page-top">
        <div className="container">
          <SectionHeading kicker="Velora Rewards" title="The more you pause, the more you earn" text="Earn 1 point per PKR 100." />
          <div className="grid-3 rewards">
            <Reveal className="reward"><h3>Welcome offer</h3><p className="big">10%</p><p>off your first order. Applied when you join the Velora Club.</p></Reveal>
            <Reveal delay={90} className="reward feature"><h3>Everyday points</h3><p className="big">1 point</p><p>for every PKR 100 you spend, on drinks, bakery and beans.</p></Reveal>
            <Reveal delay={180} className="reward gold"><h3>Gold reward</h3><p className="big">Free drink</p><p>every 10 visits. Your favourite, on us.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container split calc">
          <div>
            <h2>See what your order earns</h2>
            <p>Move the slider to a spend and watch your points add up.</p>
          </div>
          <div className="calc-box">
            <label htmlFor="spend">Spend: <strong>PKR {Number(spend).toLocaleString('en-US')}</strong></label>
            <input id="spend" type="range" min="0" max="10000" step="100" value={spend} onChange={(e) => setSpend(e.target.value)} />
            <p className="calc-out"><b>{pts}</b> points earned</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center narrow">
          <h2 className="big-h">Ready to join the Velora Club?</h2>
          <p className="lede">Your first order is 10% off. Sign-up is a demo in this class project.</p>
          <Button to="/order">Start an order</Button>
        </div>
      </section>
    </>
  )
}
