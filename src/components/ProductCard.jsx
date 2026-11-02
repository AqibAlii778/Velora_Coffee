import { useState } from 'react'
import Photo from './Photo.jsx'
import Reveal from './Reveal.jsx'
import { useCart } from '../context/CartContext.jsx'
import { fmt } from '../data/products.js'

export default function ProductCard({ p, delay = 0, label = 'Add to Order', sizes }) {
  const { add } = useCart()
  const [size, setSize] = useState(sizes ? Object.keys(sizes)[0] : null)
  const price = sizes ? sizes[size] : p.price
  const name = sizes ? `${p.name} (${size})` : p.name
  const [pop, setPop] = useState(false)

  const onAdd = () => {
    add({ key: p.id + (size || ''), id: p.id, name, price, art: p.art })
    setPop(true)
    setTimeout(() => setPop(false), 600)
  }

  return (
    <Reveal as="article" delay={delay} className="card">
      <Photo name={p.id} alt={`${p.name} by Velora`} art={p.art} className="card-img" />
      <div className="card-body">
        <h3>{p.name}</h3>
        {p.notes && <p className="notes">{p.notes}</p>}
        <p className="card-desc">{p.desc}</p>
        {sizes && (
          <div className="sizes" role="radiogroup" aria-label={`${p.name} size`}>
            {Object.keys(sizes).map((s) => (
              <button key={s} type="button" role="radio" aria-checked={size === s}
                className={size === s ? 'on' : ''} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>
        )}
        <div className="card-foot">
          <strong className="price">{fmt(price)}{p.per && <small> {p.per}</small>}</strong>
          <button type="button" className={`btn btn-small ${pop ? 'popped' : ''}`} onClick={onAdd}>
            {pop ? 'Added' : label}
          </button>
        </div>
      </div>
    </Reveal>
  )
}
