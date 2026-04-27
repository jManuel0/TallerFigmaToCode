export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-2">
      {/* Left — Avatar + Location */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
            Deliver to
          </p>
          <button className="flex items-center gap-1 text-sm font-semibold text-text-primary">
            Vancouver, Canada
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right — Cart / Bag icon */}
      <button
        id="topbar-cart-btn"
        className="relative w-11 h-11 bg-card rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 14H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v10z"/>
        </svg>
      </button>
    </header>
  )
}
