export const fmt = (n) => 'PKR ' + n.toLocaleString('en-US')

export const menu = [
  { id: 'espresso', cat: 'hot', name: 'Espresso', price: 350, art: 'espresso', desc: 'A short, syrupy double shot with dark chocolate depth and a hazelnut crema.' },
  { id: 'americano', cat: 'hot', name: 'Americano', price: 400, art: 'americano', desc: 'Two shots lengthened with hot water for a clean, bright, easy-drinking cup.' },
  { id: 'latte', cat: 'hot', name: 'Velora Latte', price: 520, art: 'latte', desc: 'Our signature: silky steamed milk poured over a caramel-sweet espresso blend.' },
  { id: 'mocha', cat: 'hot', name: 'Caramel Mocha', price: 580, art: 'mocha', desc: 'Dark cocoa, house caramel and espresso, finished with a soft cream cap.' },
  { id: 'coldbrew', cat: 'cold', name: 'Cold Brew', price: 550, art: 'cold', desc: 'Steeped 18 hours, served over ice. Smooth, low-acid and naturally sweet.' },
  { id: 'affogato', cat: 'cold', name: 'Affogato', price: 600, art: 'affogato', desc: 'Vanilla gelato drowned in a fresh double espresso. Dessert and coffee in one.' },
  { id: 'croissant', cat: 'bakery', name: 'Butter Croissant', price: 380, art: 'pastry', desc: 'Laminated daily with cultured butter. Shatteringly crisp, honeycomb inside.' },
  { id: 'pain', cat: 'bakery', name: 'Pain au Chocolat', price: 450, art: 'pastry', desc: 'Two bars of dark chocolate folded into flaky, golden pastry.' },
  { id: 'cinnamon', cat: 'bakery', name: 'Cinnamon Roll', price: 420, art: 'pastry', desc: 'Soft, spiced and glazed while warm. Best with a flat white.' },
  { id: 'cheesecake', cat: 'bakery', name: 'Basque Cheesecake', price: 650, art: 'pastry', desc: 'Burnt on top, custard-soft inside. Baked fresh each morning.' },
]

export const beans = [
  { id: 'ethiopia', name: 'Ethiopia Yirgacheffe', notes: 'Floral, citrus', art: 'beans', desc: 'Jasmine, bergamot and lemon zest. A light roast that tastes like spring.', prices: { '250g': 1800, '1kg': 6400 } },
  { id: 'colombia', name: 'Colombia Huila', notes: 'Caramel, cocoa', art: 'beans', desc: 'Brown sugar sweetness with a cocoa finish. Our everyday favourite.', prices: { '250g': 1700, '1kg': 6000 } },
  { id: 'brazil', name: 'Brazil Santos', notes: 'Nutty, smooth', art: 'beans', desc: 'Roasted hazelnut and milk chocolate with a round, low-acid body.', prices: { '250g': 1500, '1kg': 5400 } },
]

export const gifts = [
  { id: 'giftbox', name: 'Coffee Gift Box', price: 4500, art: 'box', desc: 'Two 250g bags, a ceramic cup, a hand-poured candle and a tasting card.' },
  { id: 'trio', name: 'The Tasting Trio', price: 3200, art: 'box', desc: 'Three 100g discovery bags, one from each origin, in a keepsake box.' },
]

export const subs = [
  { id: 'subscription', name: 'Monthly Velora Club', price: 1600, per: '/ month', art: 'beans', desc: 'A fresh 250g bag of our roaster’s pick, delivered every month. Pause anytime.' },
  { id: 'office', name: 'Office Bean Plan', price: 5600, per: '/ month', art: 'beans', desc: 'A 1kg bag every month for teams that run on coffee. Priority dispatch.' },
]

export const featured = [
  { id: 'latte', name: 'Signature Latte', price: 520, art: 'latte', desc: 'Silky steamed milk over a caramel-sweet espresso blend.' },
  { id: 'coldbrew', name: 'Cold Brew', price: 550, art: 'cold', desc: 'Steeped 18 hours. Smooth, low-acid, served over ice.' },
  { id: 'giftbox', name: 'Coffee Gift Box', price: 4500, art: 'box', desc: 'Beans, a ceramic cup and a candle, wrapped to give.' },
]

export const locations = [
  { id: 'clifton', name: 'Clifton', addr: 'Address placeholder, Block 4, Clifton, Karachi', x: 62, y: 70 },
  { id: 'dha', name: 'DHA', addr: 'Address placeholder, Phase 6, DHA, Karachi', x: 44, y: 54 },
  { id: 'gulshan', name: 'Gulshan', addr: 'Address placeholder, Gulshan-e-Iqbal, Karachi', x: 70, y: 28 },
]
