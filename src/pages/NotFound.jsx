import Button from '../components/Button.jsx'
import { usePageMeta } from '../components/useReveal.js'

export default function NotFound() {
  usePageMeta('Page not found', 'This page could not be found. Head back to the Velora menu or home page.')
  return (
    <section className="section page-top">
      <div className="container narrow center">
        <p className="nf">404</p>
        <h1 className="statement sm">This cup is empty.</h1>
        <p className="lede">The page you’re looking for doesn’t exist. Try the menu or head home.</p>
        <div className="hero-cta center-row"><Button to="/">Back home</Button><Button to="/menu" variant="ghost">See the menu</Button></div>
      </div>
    </section>
  )
}
