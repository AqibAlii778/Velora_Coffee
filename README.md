# Velora Coffee Co.

Premium small-batch coffee brand website. React + Vite + plain CSS. No backend, no paid services.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview
```

## Features
- 8 routes + 404: Home, Menu, Shop, Our Story, Locations, Contact, Order, Rewards
- Shared cart (Context + localStorage), slide-in drawer, quantity controls, demo checkout
- Validated contact form with success state (no backend)
- Animated hero, marquee, scroll reveals, count-up stats, illustrated map; respects `prefers-reduced-motion`
- Responsive for 1440 / 768 / 390 px

## Your images and logo
- Drop JPGs into `public/images/` (names listed in `public/images/README.txt`). Missing photos fall back to built-in illustrations.
- Add your logo as `src/assets/velora-logo.svg` and it replaces the VELORA wordmark automatically.

## Deploy on Vercel
Import the repo → Framework: Vite → Build `npm run build` → Output `dist` → Deploy. `vercel.json` handles SPA routing.

Reviews, statistics and addresses are sample content for a class project.
