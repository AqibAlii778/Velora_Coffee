import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    if (!('IntersectionObserver' in window)) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [seen]) // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, seen]
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Velora Coffee Co.` : 'Velora Coffee Co. — Awaken Every Moment'
    const set = (sel, attr, val) => document.head.querySelector(sel)?.setAttribute(attr, val)
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', document.title)
    set('meta[property="og:description"]', 'content', description)
  }, [title, description])
}
