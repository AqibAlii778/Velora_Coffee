import { useState } from 'react'
import Art from './Art.jsx'

// Shows /images/<name>.jpg when you add it, otherwise the built-in illustration.
export default function Photo({ name, alt, art = 'latte', eager = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`photo ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="photo-fallback"><Art kind={art} /></div>
      ) : (
        <img
          src={`/images/${name}.jpg`} alt={alt} width="800" height="1000"
          loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
