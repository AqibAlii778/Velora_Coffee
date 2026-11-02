const words = ['Small-batch roasted', 'Direct-trade beans', 'Freshly delivered', 'Awaken every moment', 'Brewed to be felt']

export default function Marquee() {
  const row = words.map((w) => (
    <span key={w} className="mq-item">{w}<i aria-hidden="true" /></span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">{row}{row}{row}{row}</div>
    </div>
  )
}
