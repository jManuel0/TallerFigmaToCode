import FoodCard from './FoodCard'

const allProducts = [
  {
    id: 1,
    name: 'Biryani Bliss',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=400&fit=crop&q=80',
    category: 'Biryani',
    rating: 4.8,
    badge: null,
    calories: '350 Cal',
  },
  {
    id: 2,
    name: 'Pizza Bliss',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&q=80',
    category: 'Pizza',
    rating: 4.9,
    badge: 'Safe Work',
    calories: '480 Cal',
  },
  {
    id: 3,
    name: 'Burger Bliss',
    price: 14.20,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&q=80',
    category: 'Burger',
    rating: 4.7,
    badge: '560 Cal',
    calories: '560 Cal',
  },
  {
    id: 4,
    name: 'Sandwich Bliss',
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop&q=80',
    category: 'Sandwich',
    rating: 4.5,
    badge: null,
    calories: '320 Cal',
  },
  {
    id: 5,
    name: 'Hyderabadi Biryani',
    price: 15.80,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=400&fit=crop&q=80',
    category: 'Biryani',
    rating: 4.9,
    badge: 'Best Seller',
    calories: '400 Cal',
  },
  {
    id: 6,
    name: 'Veg Burger',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop&q=80',
    category: 'Burger',
    rating: 4.3,
    badge: null,
    calories: '420 Cal',
  },
  {
    id: 7,
    name: 'Paneer Burger',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=400&fit=crop&q=80',
    category: 'Burger',
    rating: 4.6,
    badge: null,
    calories: '450 Cal',
  },
  {
    id: 8,
    name: 'Margherita',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=400&fit=crop&q=80',
    category: 'Pizza',
    rating: 4.8,
    badge: null,
    calories: '430 Cal',
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
