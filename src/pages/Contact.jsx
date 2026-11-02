import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import { usePageMeta } from '../components/useReveal.js'

const empty = { name: '', email: '', phone: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a phone number with at least 10 digits.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters so we can help.'
  return e
}

export default function Contact() {
  usePageMeta('Contact', 'Contact Velora Coffee Co. for orders, events, careers and franchise enquiries.')
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)

  const change = (k) => (ev) => {
    const nv = { ...v, [k]: ev.target.value }
    setV(nv)
    if (err[k]) setErr({ ...err, [k]: validate(nv)[k] })
  }
  const submit = (ev) => {
    ev.preventDefault()
    const e = validate(v)
    setErr(e)
    if (!Object.keys(e).length) setSent(true)
  }

  const field = (k, label, type = 'text', area = false) => {
    const Tag = area ? 'textarea' : 'input'
    return (
      <div className={`field ${err[k] ? 'bad' : ''}`} key={k}>
        <label htmlFor={k}>{label}</label>
        <Tag id={k} name={k} type={area ? undefined : type} rows={area ? 5 : undefined} value={v[k]} onChange={change(k)}
          aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} autoComplete={k === 'phone' ? 'tel' : k} />
        {err[k] && <p id={k + '-e'} className="err" role="alert">{err[k]}</p>}
      </div>
    )
  }

  return (
    <section className="section page-top">
      <div className="container contact">
        <div>
          <SectionHeading kicker="Say hello" title="We’d love to hear from you" text="Questions about an order, an event or working with us? Write to us and we’ll reply within a day." />
          <dl className="info">
            <div><dt>Email</dt><dd><a href="mailto:hello@velora.coffee">hello@velora.coffee</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+923000000000">+92 300 0000000</a></dd></div>
            <div><dt>Web</dt><dd>velora.coffee</dd></div>
            <div><dt>Instagram</dt><dd>@velora.coffee</dd></div>
          </dl>
        </div>
        {sent ? (
          <div className="success" role="status">
            <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="26" fill="none" stroke="#B97F55" strokeWidth="3" /><path d="M16 29l8 8 16-17" fill="none" stroke="#5A2321" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="tick" /></svg>
            <h2>Thank you, {v.name.split(' ')[0]}.</h2>
            <p>Your message is on its way to the Velora team. This is a demo form, so nothing was actually sent.</p>
            <button type="button" className="btn btn-ghost" onClick={() => { setV(empty); setSent(false) }}>Send another message</button>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            {field('name', 'Name')}
            {field('email', 'Email', 'email')}
            {field('phone', 'Phone', 'tel')}
            {field('message', 'Message', 'text', true)}
            <button type="submit" className="btn btn-primary">Send message</button>
          </form>
        )}
      </div>
    </section>
  )
}
