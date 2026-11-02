import { useEffect, useState } from 'react'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { usePageMeta, useInView } from '../components/useReveal.js'

const chapters = [
  ['farm', 'farm', 'Direct-trade sourcing', 'We visit our partner farms every harvest and pay a price that lets families invest in their land. No middlemen, no mystery lots.'],
  ['beans', 'ethiopia', 'Coffee origins', 'Ethiopia for florals, Colombia for sweetness, Brazil for comfort. Three origins, each chosen for what it does best in the cup.'],
  ['beans', 'roast', 'Small-batch roasting', 'Twelve kilos at a time, watched by ear, eye and nose. Small batches let us find the exact moment a bean tastes its best.'],
  ['pastry', 'croissant', 'Freshness and craft', 'Beans ship within two days of roasting. Pastries are baked before we open. If it is not fresh, it does not leave the kitchen.'],
  ['room', 'interior', 'Community and the Velora experience', 'Our rooms are quiet on purpose: warm light, deep chairs and time to stay. Come alone, bring a book, or meet a friend.'],
]

function Count({ to, suffix = '' }) {
  const [ref, seen] = useInView()
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    let raf, start
    const tick = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export default function Story() {
  usePageMeta('Our Story', 'How Velora began: direct-trade sourcing, small-batch roasting and a pause worth having.')
  return (
    <>
      <section className="section page-top story-hero">
        <div className="container narrow">
          <h1 className="statement">Velora began with one idea: coffee should feel like a pause worth having.</h1>
        </div>
      </section>

      <section className="section tight">
        <div className="container stats">
          {[[3, '', 'origins we roast'], [12, 'kg', 'per small batch'], [48, 'h', 'roast to dispatch'], [100, '%', 'direct-trade']].map(([n, s, l]) => (
            <Reveal key={l} className="stat"><strong><Count to={n} suffix={s} /></strong><span>{l}</span></Reveal>
          ))}
        </div>
      </section>

      {chapters.map(([art, name, title, text], i) => (
        <section key={title} className={`section chapter ${i % 2 ? 'flip' : ''}`}>
          <div className="container split">
            <Reveal className="split-img"><div className="arch"><Photo name={name} art={art} alt={title} /></div></Reveal>
            <Reveal delay={120} className="chapter-text"><h2>{title}</h2><p>{text}</p></Reveal>
          </div>
        </section>
      ))}

      <section className="section dark">
        <Reveal className="container center">
          <h2 className="big-h">Come and take your pause.</h2>
          <Button to="/locations" variant="peach">Find a Velora</Button>
        </Reveal>
      </section>
    </>
  )
}
