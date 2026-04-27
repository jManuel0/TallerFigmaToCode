const categories = [
  { name: 'All', emoji: '🍽️' },
  { name: 'Pizza', emoji: '🍕' },
  { name: 'Burger', emoji: '🍔' },
  { name: 'Biryani', emoji: '🍛' },
  { name: 'Sandwich', emoji: '🥪' },
]

export default function CategoryFilter({ active, onSelect }) {
  return (
    <div className="px-5 py-3">
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.name}
            id={`category-${cat.name.toLowerCase()}`}
            onClick={() => onSelect(cat.name)}
            className={`flex-shrink-0 flex flex-col items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              active === cat.name
                ? 'bg-text-primary text-white shadow-md'
                : 'bg-card text-text-secondary hover:bg-gray-200'
            }`}
          >
            <span className="text-base">{cat.emoji}</span>
            <span className="text-[11px]">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
