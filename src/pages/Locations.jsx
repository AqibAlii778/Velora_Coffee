import { useState } from 'react'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { usePageMeta } from '../components/useReveal.js'
import { locations } from '../data/products.js'

export default function Locations() {
  usePageMeta('Locations', 'Visit Velora in Clifton, DHA and Gulshan. Open daily 8am to 12am.')
  const [active, setActive] = useState('dha')
  const sel = locations.find((l) => l.id === active)
  return (
    <section className="section page-top">
      <div className="container">
        <SectionHeading kicker="Visit us" title="Three rooms, one pause" text="Open daily, 8am – 12am." />
        <div className="loc-layout">
          <div className="loc-list">
            {locations.map((l, i) => (
              <Reveal as="article" key={l.id} delay={i * 80}
                className={`loc ${active === l.id ? 'on' : ''}`}
                onMouseEnter={() => setActive(l.id)}>
                <Photo name={l.id} art="room" alt={`Velora ${l.name} café interior`} className="loc-img" />
                <div className="loc-body">
                  <h3>{l.name}</h3>
                  <p>Open daily, 8am – 12am</p>
                  <p className="muted">{l.addr}</p>
                  <Button variant="ghost" className="btn-small" onClick={() => setActive(l.id)} aria-pressed={active === l.id}>View Location</Button>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="map" role="img" aria-label={`Illustrated map. Selected: Velora ${sel.name}`}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <rect width="100" height="100" fill="#F3DCC3" />
              <path d="M0 82 Q30 70 55 86 T100 80 V100 H0Z" fill="#E5BE93" />
              <g fill="none" stroke="#FFF6EC" strokeWidth="2.2" strokeLinecap="round">
                <path d="M-5 40 L105 52" /><path d="M30 -5 L48 105" /><path d="M75 -5 L62 105" /><path d="M-5 18 Q50 22 105 10" />
              </g>
              <g fill="none" stroke="#FFF6EC" strokeWidth=".9" opacity=".8"><path d="M10 70 L90 66" /><path d="M85 0 L95 100" /><path d="M-5 60 L60 30" /></g>
              {locations.map((l) => (
                <g key={l.id} className={`pin ${active === l.id ? 'on' : ''}`} transform={`translate(${l.x} ${l.y})`}
                  tabIndex="0" role="button" aria-label={`Select ${l.name}`} onClick={() => setActive(l.id)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(l.id)}>
                  <circle r="7" className="halo" />
                  <path d="M0 0 C-5 -7 -5 -14 0 -14 C5 -14 5 -7 0 0Z" transform="translate(0 4) scale(1.2)" />
                  <text y="-18" textAnchor="middle">{l.name}</text>
                </g>
              ))}
            </svg>
            <p className="map-note">Illustrated map. Real directions coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
