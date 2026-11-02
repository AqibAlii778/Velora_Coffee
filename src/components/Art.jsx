// Built-in illustrations in the Velora palette. Used whenever a photo is missing from /public/images.
const C = { maroon: '#5A2321', peach: '#FFD1A1', cream: '#FFF6EC', latte: '#B97F55', cocoa: '#2E1513' }

const beanSpots = Array.from({ length: 34 }, (_, i) => ({
  x: (i * 83) % 400, y: (i * 137) % 500, r: ((i * 47) % 60) - 30, s: 0.8 + ((i * 13) % 5) / 10,
}))

function Bean({ x, y, r, s }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <ellipse rx="34" ry="22" fill={C.latte} />
      <path d="M-30 0 C-10 -10 10 10 30 0" fill="none" stroke={C.cocoa} strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

const scenes = {
  latte: (
    <>
      <rect width="400" height="500" fill={C.peach} />
      <circle cx="200" cy="250" r="165" fill={C.cream} />
      <circle cx="200" cy="250" r="125" fill="#fff" opacity=".6" />
      <rect x="312" y="232" width="62" height="36" rx="18" fill={C.cream} stroke={C.latte} strokeWidth="3" />
      <circle cx="200" cy="250" r="108" fill={C.cream} stroke={C.latte} strokeWidth="3" />
      <circle cx="200" cy="250" r="92" fill={C.latte} />
      <circle cx="200" cy="250" r="76" fill="#C99468" />
      <path d="M200 312 C150 275 150 215 182 205 C196 201 200 214 200 222 C200 214 204 201 218 205 C250 215 250 275 200 312Z" fill={C.cream} />
      <path d="M200 296 C170 270 172 232 190 226 M200 296 C230 270 228 232 210 226" fill="none" stroke={C.latte} strokeWidth="3" opacity=".5" />
    </>
  ),
  cold: (
    <>
      <rect width="400" height="500" fill={C.maroon} />
      <circle cx="200" cy="250" r="170" fill={C.cocoa} opacity=".35" />
      <rect x="236" y="40" width="14" height="240" rx="7" fill={C.peach} transform="rotate(14 243 160)" />
      <path d="M118 130 H282 L262 440 Q260 456 244 456 H156 Q140 456 138 440Z" fill={C.cream} opacity=".18" stroke={C.cream} strokeWidth="3" />
      <path d="M126 215 H274 L262 440 Q260 452 244 452 H156 Q140 452 138 440Z" fill={C.cocoa} />
      <path d="M126 215 H274 L270 280 Q200 300 130 270Z" fill={C.latte} />
      <g fill={C.cream} opacity=".55">
        <rect x="150" y="160" width="46" height="46" rx="8" transform="rotate(-10 173 183)" />
        <rect x="204" y="150" width="46" height="46" rx="8" transform="rotate(12 227 173)" />
        <rect x="176" y="204" width="40" height="40" rx="8" transform="rotate(6 196 224)" />
      </g>
    </>
  ),
  beans: (
    <>
      <rect width="400" height="500" fill={C.cocoa} />
      {beanSpots.map((b, i) => <Bean key={i} {...b} />)}
      <rect width="400" height="500" fill={C.cocoa} opacity=".18" />
    </>
  ),
  pastry: (
    <>
      <rect width="400" height="500" fill={C.peach} />
      <ellipse cx="200" cy="300" rx="150" ry="22" fill={C.latte} opacity=".35" />
      <g transform="translate(200 250) rotate(-12)">
        <path d="M-140 40 Q-120 -90 0 -90 Q120 -90 140 40 Q110 10 80 20 Q60 -20 30 10 Q0 -30 -30 10 Q-60 -20 -80 20 Q-110 10 -140 40Z" fill={C.latte} />
        <path d="M-100 10 Q-90 -60 -20 -70 M-30 -75 Q0 -80 30 -70 M100 10 Q90 -60 20 -70" fill="none" stroke={C.maroon} strokeWidth="5" strokeLinecap="round" opacity=".5" />
        <path d="M-40 -60 Q0 -95 40 -60" fill="none" stroke={C.cream} strokeWidth="6" strokeLinecap="round" opacity=".6" />
      </g>
    </>
  ),
  box: (
    <>
      <rect width="400" height="500" fill={C.maroon} />
      <circle cx="320" cy="90" r="60" fill={C.peach} opacity=".25" />
      <rect x="80" y="230" width="240" height="190" rx="10" fill={C.cream} />
      <rect x="64" y="190" width="272" height="56" rx="10" fill={C.peach} />
      <rect x="184" y="190" width="32" height="230" fill={C.latte} />
      <path d="M200 190 C160 130 110 150 140 185 C160 200 200 190 200 190Z M200 190 C240 130 290 150 260 185 C240 200 200 190 200 190Z" fill="none" stroke={C.latte} strokeWidth="10" strokeLinejoin="round" />
    </>
  ),
  farm: (
    <>
      <rect width="400" height="500" fill={C.peach} />
      <circle cx="270" cy="140" r="64" fill={C.cream} />
      <path d="M0 300 Q100 220 200 290 T400 260 V500 H0Z" fill={C.latte} />
      <path d="M0 360 Q120 290 240 350 T400 330 V500 H0Z" fill={C.maroon} />
      <path d="M0 430 Q140 380 260 430 T400 410 V500 H0Z" fill={C.cocoa} />
      <g fill="none" stroke={C.peach} strokeWidth="3" opacity=".5">
        <path d="M20 400 Q140 350 260 405" /><path d="M0 450 Q150 410 300 455" />
      </g>
    </>
  ),
  room: (
    <>
      <rect width="400" height="500" fill={C.cream} />
      <path d="M90 420 V200 Q90 90 200 90 Q310 90 310 200 V420Z" fill={C.peach} />
      <path d="M118 420 V205 Q118 118 200 118 Q282 118 282 205 V420Z" fill={C.cream} opacity=".55" />
      <circle cx="220" cy="190" r="26" fill={C.cream} />
      <rect y="420" width="400" height="80" fill={C.maroon} />
      <g stroke={C.cocoa} strokeWidth="3"><line x1="120" y1="0" x2="120" y2="60" /><line x1="280" y1="0" x2="280" y2="40" /></g>
      <path d="M96 60 H144 L132 84 H108Z" fill={C.latte} /><path d="M256 40 H304 L292 64 H268Z" fill={C.latte} />
      <rect x="140" y="360" width="120" height="14" rx="7" fill={C.latte} /><rect x="196" y="374" width="8" height="46" fill={C.cocoa} />
    </>
  ),
}

export default function Art({ kind = 'latte' }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" className="art">
      {scenes[kind] || scenes.latte}
    </svg>
  )
}
