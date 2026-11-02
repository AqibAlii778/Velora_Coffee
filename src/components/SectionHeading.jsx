import Reveal from './Reveal.jsx'

export default function SectionHeading({ kicker, title, text, align = 'left', tone = 'dark' }) {
  return (
    <Reveal className={`sh sh-${align} sh-${tone}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {text && <p className="lede">{text}</p>}
    </Reveal>
  )
}
