import Logo from './Logo.jsx'
import Photo from './Photo.jsx'

function Cup() {
  return (
    <svg viewBox="0 0 600 560" role="img" aria-label="A Velora ceramic coffee cup with latte art, steaming" className="cup-svg">
      <defs>
        <linearGradient id="cupBody" x1="0" x2="1">
          <stop offset="0" stopColor="#F2DEC6" /><stop offset=".45" stopColor="#FFF6EC" /><stop offset="1" stopColor="#E9CFB1" />
        </linearGradient>
        <radialGradient id="cof" cx=".5" cy=".4" r=".7"><stop offset="0" stopColor="#C99468" /><stop offset="1" stopColor="#8A5530" /></radialGradient>
      </defs>
      <ellipse cx="300" cy="500" rx="230" ry="26" fill="#2E1513" opacity=".18" />
      <ellipse cx="300" cy="474" rx="226" ry="38" fill="url(#cupBody)" stroke="#B97F55" strokeWidth="2" />
      <ellipse cx="300" cy="466" rx="150" ry="24" fill="#E9CFB1" opacity=".7" />
      <path d="M418 318 C505 300 506 418 408 412" fill="none" stroke="#B97F55" strokeWidth="30" strokeLinecap="round" />
      <path d="M418 318 C505 300 506 418 408 412" fill="none" stroke="url(#cupBody)" strokeWidth="24" strokeLinecap="round" />
      <path d="M160 300 H440 C440 410 390 472 300 472 C210 472 160 410 160 300Z" fill="url(#cupBody)" stroke="#B97F55" strokeWidth="2" />
      <path d="M205 330 C215 400 240 440 275 455" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".5" />
      <path d="M262 372 L300 424 L338 372" fill="none" stroke="#5A2321" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="300" cy="300" rx="140" ry="34" fill="#FFF6EC" stroke="#B97F55" strokeWidth="2" />
      <ellipse cx="300" cy="302" rx="124" ry="27" fill="url(#cof)" />
      <path d="M300 318 C262 304 262 288 280 286 C292 285 300 292 300 297 C300 292 308 285 320 286 C338 288 338 304 300 318Z" fill="#FFF6EC" opacity=".92" />
      <g className="steam" fill="none" stroke="#B97F55" strokeWidth="5" strokeLinecap="round" opacity=".55">
        <path d="M255 250 C235 220 275 205 255 170 C240 142 268 125 258 98" />
        <path d="M300 240 C280 210 320 190 300 155 C285 128 312 108 302 80" style={{ animationDelay: '.7s' }} />
        <path d="M345 250 C325 222 365 206 345 172 C332 146 358 128 348 104" style={{ animationDelay: '1.4s' }} />
      </g>
      <g fill="#B97F55">
        <ellipse cx="86" cy="500" rx="16" ry="10" transform="rotate(-24 86 500)" />
        <ellipse cx="116" cy="520" rx="14" ry="9" transform="rotate(18 116 520)" />
        <ellipse cx="522" cy="505" rx="16" ry="10" transform="rotate(20 522 505)" />
      </g>
    </svg>
  )
}

export default function MenuHero() {
  return (
    <section className="menu-hero">
      <div className="container menu-hero-in">
        <div className="menu-logo"><Logo /></div>
        <p className="menu-tag">Awaken Every Moment.</p>
        <div className="cup-wrap">
          <div className="cup-glow" aria-hidden="true" />
          <Photo name="menu-hero" alt="Velora coffee cup with latte art" art="latte" className="cup-photo" />
          <Cup />
        </div>
        <h1>The Menu</h1>
        <p className="lede">Pick a category. Every drink is built by hand with beans roasted this week.</p>
      </div>
    </section>
  )
}
