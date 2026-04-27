import { useState } from 'react'

const categories = ['All', 'Pizza', 'Burger', 'Sushi', 'Bowl', 'Salad']

export default function CategoryFilter({ active, onSelect }) {
  return (
    <div className="px-5 py-3">
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`category-${cat.toLowerCase()}`}
            onClick={() => onSelect(cat)}
            className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              active === cat
                ? 'bg-text-primary text-white shadow-md'
                : 'bg-card text-text-secondary hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
