import { useState } from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Burger Clásica',
    description: 'Jugosa carne de res con queso cheddar derretido, lechuga fresca, tomate y salsa especial.',
    price: 8.99,
    originalPrice: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&q=80',
    category: 'Hamburguesas',
    rating: 4.8,
    deliveryTime: '25-30 min',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Masa artesanal con salsa de tomate San Marzano, mozzarella fresca y albahaca.',
    price: 12.49,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=400&fit=crop&q=80',
    category: 'Pizzas',
    rating: 4.9,
    deliveryTime: '30-35 min',
    badge: null,
  },
  {
    id: 3,
    name: 'Poke Bowl',
    description: 'Salmón fresco, aguacate, edamame, arroz de sushi y aderezo de sésamo.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&q=80',
    category: 'Bowls',
    rating: 4.7,
    deliveryTime: '20-25 min',
    badge: 'Nuevo',
  },
  {
    id: 4,
    name: 'Tacos al Pastor',
    description: 'Tortilla de maíz con carne al pastor, piña, cebolla y cilantro fresco.',
    price: 9.99,
    originalPrice: 13.49,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=400&fit=crop&q=80',
    category: 'Mexicana',
    rating: 4.6,
    deliveryTime: '20-25 min',
    badge: 'Oferta',
  },
  {
    id: 5,
    name: 'Sushi Roll Mix',
    description: 'Selección de 12 piezas: California, Philadelphia y Spicy Tuna roll.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=400&fit=crop&q=80',
    category: 'Japonesa',
    rating: 4.9,
    deliveryTime: '35-40 min',
    badge: null,
  },
  {
    id: 6,
    name: 'Ensalada Caesar',
    description: 'Lechuga romana crujiente, parmesano, crutones dorados y aderezo caesar casero.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop&q=80',
    category: 'Ensaladas',
    rating: 4.5,
    deliveryTime: '15-20 min',
    badge: 'Saludable',
  },
]

const categories = ['Todos', 'Hamburguesas', 'Pizzas', 'Bowls', 'Mexicana', 'Japonesa', 'Ensaladas']

export default function ProductList() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos'
    ? products
    : products.filter((p) => p.category === active)

  return (
    <section id="menu" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Nuestro Menú
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary mb-4">
            Platos <span className="text-primary">irresistibles</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de platillos preparados con los mejores ingredientes y mucho amor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                active === cat
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
