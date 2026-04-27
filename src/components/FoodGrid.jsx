import FoodCard from './FoodCard'

const allProducts = [
  {
    id: 1,
    name: 'Pepperoni Bliss',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&q=80',
    category: 'Pizza',
    rating: 4.8,
    badge: 'Safe Work',
  },
  {
    id: 2,
    name: 'The Master Burger',
    price: 14.20,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&q=80',
    category: 'Burger',
    rating: null,
    badge: '560 Cal',
  },
  {
    id: 3,
    name: 'Garden Fresh',
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&q=80',
    category: 'Salad',
    rating: 4.5,
    badge: null,
  },
  {
    id: 4,
    name: 'Salmon Sunset',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=400&fit=crop&q=80',
    category: 'Sushi',
    rating: 4.9,
    badge: null,
  },
  {
    id: 5,
    name: 'Hawaiian Dream',
    price: 13.80,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&q=80',
    category: 'Pizza',
    rating: 4.7,
    badge: 'Best Seller',
  },
  {
    id: 6,
    name: 'Poke Power Bowl',
    price: 15.40,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&q=80',
    category: 'Bowl',
    rating: 4.6,
    badge: null,
  },
]

export default function FoodGrid({ activeCategory, onProductClick }) {
  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  return (
    <section className="px-5 pt-4 pb-28">
      {/* Section header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-text-primary">Popular Food</h2>
        <button className="text-sm font-semibold text-primary hover:underline cursor-pointer">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-5">
        {filtered.map((product) => (
          <FoodCard key={product.id} product={product} onClick={onProductClick} />
        ))}
      </div>
    </section>
  )
}
