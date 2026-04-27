import { useState } from 'react'

const productDescriptions = {
  'Biryani Bliss': 'Aromatic basmati rice layered with tender marinated chicken, saffron, and a blend of traditional Indian spices. Slow-cooked to perfection in a sealed pot for rich, deep flavors.',
  'Pizza Bliss': 'Experience the perfect blend of fresh mozzarella, tangy tomato sauce, and our signature thin crust. Hand-kneaded dough rested for 24 hours to ensure an airy, crisp finish that melts in your mouth.',
  'Burger Bliss': 'A juicy quarter-pound beef patty grilled to perfection, topped with melted cheddar, crisp lettuce, ripe tomatoes, pickles, and our secret house sauce on a toasted brioche bun.',
  'Sandwich Bliss': 'Freshly baked artisan bread loaded with premium sliced turkey, creamy avocado, Swiss cheese, crunchy veggies, and a drizzle of honey mustard dressing.',
  'Hyderabadi Biryani': 'The legendary Hyderabadi dum biryani with succulent goat meat, fragrant basmati rice, crispy onions, fresh herbs, and a side of cooling raita.',
  'Veg Burger': 'A hearty plant-based patty made with black beans, quinoa, and roasted vegetables, topped with fresh avocado, sprouts, and chipotle aioli.',
  'Paneer Burger': 'Crispy paneer tikka patty marinated in tandoori spices, layered with mint chutney, pickled onions, and fresh greens on a butter-toasted bun.',
  'Margherita': 'Classic Italian pizza with San Marzano tomato sauce, fresh buffalo mozzarella, fragrant basil leaves, and a drizzle of extra virgin olive oil on a wood-fired crust.',
}

const productExtras = {
  'Biryani Bliss': [
    { id: 1, name: 'Indian Spices', price: 0.50, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&h=100&fit=crop&q=80' },
    { id: 2, name: 'Raita', price: 1.00, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop&q=80' },
    { id: 3, name: 'Naan Bread', price: 1.50, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=100&h=100&fit=crop&q=80' },
  ],
  'Pizza Bliss': [
    { id: 1, name: 'Extra Basil', price: 0.50, image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=100&h=100&fit=crop&q=80' },
    { id: 2, name: 'Parmesan', price: 1.20, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop&q=80' },
    { id: 3, name: 'Olives', price: 0.80, image: 'https://images.unsplash.com/photo-1563288105-db0fa9c7e834?w=100&h=100&fit=crop&q=80' },
  ],
  'Burger Bliss': [
    { id: 1, name: 'Extra Cheese', price: 1.00, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop&q=80' },
    { id: 2, name: 'Bacon', price: 1.50, image: 'https://images.unsplash.com/photo-1606851094655-b3b5a1249a4d?w=100&h=100&fit=crop&q=80' },
    { id: 3, name: 'Jalapeños', price: 0.60, image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=100&h=100&fit=crop&q=80' },
  ],
  'Sandwich Bliss': [
    { id: 1, name: 'Avocado', price: 1.20, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=100&h=100&fit=crop&q=80' },
    { id: 2, name: 'Extra Turkey', price: 1.80, image: 'https://images.unsplash.com/photo-1606851094655-b3b5a1249a4d?w=100&h=100&fit=crop&q=80' },
    { id: 3, name: 'Swiss Cheese', price: 0.80, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop&q=80' },
  ],
}

const defaultExtras = [
  { id: 1, name: 'Extra Basil', price: 0.50, image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=100&h=100&fit=crop&q=80' },
  { id: 2, name: 'Parmesan', price: 1.20, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=100&h=100&fit=crop&q=80' },
  { id: 3, name: 'Olives', price: 0.80, image: 'https://images.unsplash.com/photo-1563288105-db0fa9c7e834?w=100&h=100&fit=crop&q=80' },
]

const sizes = ['Small', 'Medium', 'Large']

export default function ProductDetail({ product, onBack }) {
  const [selectedSize, setSelectedSize] = useState('Medium')
  const [quantity, setQuantity] = useState(1)
  const [selectedExtras, setSelectedExtras] = useState([])

  const productName = product?.name || 'Pizza Bliss'
  const basePrice = product?.price || 14.99
  const extras = productExtras[productName] || defaultExtras
  const description = productDescriptions[productName] || productDescriptions['Pizza Bliss']

  const sizeMultiplier = selectedSize === 'Small' ? 0.8 : selectedSize === 'Large' ? 1.3 : 1
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = extras.find((e) => e.id === id)
    return sum + (extra?.price || 0)
  }, 0)
  const total = ((basePrice * sizeMultiplier) + extrasTotal) * quantity

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white max-w-lg mx-auto relative">
      {/* Hero Image */}
      <div className="relative h-72 bg-gradient-to-b from-red-900 via-red-800 to-red-900 overflow-hidden">
        {/* Watermark — product name */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[70px] font-black text-white uppercase tracking-widest whitespace-nowrap">
            {productName.toUpperCase()}
          </span>
        </div>

        {/* Product image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={product?.image || 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&q=80'}
            alt={productName}
            className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-white/20"
          />
        </div>

        {/* Top controls */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
          <button
            id="detail-back-btn"
            onClick={onBack}
            className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="detail-fav-btn"
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-110 transition-transform cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative -mt-8 bg-white rounded-t-[32px] px-6 pt-8 pb-28">
        {/* Name + Price */}
        <div className="flex items-start justify-between mb-1">
          <h1 className="text-2xl font-extrabold text-text-primary">{productName}</h1>
          <div className="text-right flex-shrink-0 ml-4">
            <p className="text-2xl font-extrabold text-primary">${basePrice.toFixed(2)}</p>
            <p className="text-xs text-text-secondary">{product?.calories || '480 Cal'}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-sm font-bold text-text-primary">{product?.rating || 4.9}</span>
          <span className="text-sm text-text-secondary">(120+ Reviews)</span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-2">Description</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>

        {/* Select Size */}
        <div className="mb-6">
          <h3 className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-3">Select Size</h3>
          <div className="flex gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                id={`size-${size.toLowerCase()}`}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedSize === size
                    ? 'border-2 border-primary text-primary bg-primary/5'
                    : 'border-2 border-gray-200 text-text-secondary hover:border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Total */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                id="qty-minus"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </button>
              <span className="text-lg font-bold text-text-primary w-6 text-center">{quantity}</span>
              <button
                id="qty-plus"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/30 hover:scale-110 active:scale-90 transition-all cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-3">Total</h3>
            <p className="text-2xl font-extrabold text-text-primary">${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Extras */}
        <div>
          <h3 className="text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] mb-3">Add Extras</h3>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {extras.map((extra) => (
              <button
                key={extra.id}
                id={`extra-${extra.id}`}
                onClick={() => toggleExtra(extra.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  selectedExtras.includes(extra.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                }`}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={extra.image} alt={extra.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{extra.name}</span>
                <span className="text-[10px] font-bold text-primary">+${extra.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-4">
        <div className="max-w-lg mx-auto">
          <button
            id="add-to-cart-btn"
            className="w-full py-4 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 14H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v10z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
