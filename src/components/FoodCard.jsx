export default function FoodCard({ product, onClick }) {
  return (
    <div
      id={`food-card-${product.id}`}
      className="flex flex-col group cursor-pointer"
      onClick={() => onClick(product)}
    >
      {/* Image container */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-card mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating badge */}
        {product.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-[11px] font-bold text-text-primary">{product.rating}</span>
          </div>
        )}

        {/* Extra badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-badge-bg backdrop-blur-sm rounded-full">
            <span className="text-[10px] font-bold text-white uppercase tracking-wide">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex items-end justify-between px-1">
        <div>
          <h3 className="text-sm font-semibold text-text-primary leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-base font-extrabold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Add button */}
        <button
          id={`add-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer flex-shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
