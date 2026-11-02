import { useInView } from './useReveal.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': delay + 'ms' }} {...rest}>
      {children}
    </Tag>
  )
}
