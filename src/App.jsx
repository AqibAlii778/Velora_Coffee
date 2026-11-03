import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Menu = lazy(() => import('./pages/Menu.jsx'))
const Shop = lazy(() => import('./pages/Shop.jsx'))
const Story = lazy(() => import('./pages/Story.jsx'))
const Locations = lazy(() => import('./pages/Locations.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Order = lazy(() => import('./pages/Order.jsx'))
const Rewards = lazy(() => import('./pages/Rewards.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollTop />
      <Navbar />
      <main id="main" key={pathname} className="page">
        <Suspense fallback={<div className="loading" aria-busy="true">Brewing…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/story" element={<Story />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
