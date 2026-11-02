import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartCtx = createContext(null)
const KEY = 'velora-cart-v1'

function reducer(state, a) {
  switch (a.type) {
    case 'add': {
      const found = state.find((i) => i.key === a.item.key)
      if (found) return state.map((i) => (i.key === a.item.key ? { ...i, qty: i.qty + 1 } : i))
      return [...state, { ...a.item, qty: 1 }]
    }
    case 'qty':
      return state.map((i) => (i.key === a.key ? { ...i, qty: Math.max(1, i.qty + a.d) } : i))
    case 'remove':
      return state.filter((i) => i.key !== a.key)
    case 'clear':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
  })
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch { /* storage unavailable */ }
  }, [items])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0)
    const total = items.reduce((s, i) => s + i.qty * i.price, 0)
    return {
      items, count, total, open, setOpen, toast,
      add: (item) => { dispatch({ type: 'add', item }); setToast(item.name + ' added to your order') },
      qty: (key, d) => dispatch({ type: 'qty', key, d }),
      remove: (key) => dispatch({ type: 'remove', key }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items, open, toast])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export const useCart = () => useContext(CartCtx)
