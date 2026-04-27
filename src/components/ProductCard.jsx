import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article
      id={`product-card-${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg shadow-primary/30 uppercase tracking-wide">
            {product.badge}
          </span>
        )}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-medium text-gray-700">{product.deliveryTime}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-1">{product.category}</span>
        <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-xl font-extrabold text-secondary">${product.price.toFixed(2)}</span>
          </div>
          <button
            id={`add-to-cart-${product.id}`}
            onClick={handleAdd}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 active:scale-90 cursor-pointer ${
              added
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                : 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105'
            }`}
          >
            {added ? '✓ Agregado' : '+ Agregar'}
          </button>
        </div>
      </div>
    </article>
  )
}
