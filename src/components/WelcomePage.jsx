export default function WelcomePage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/80 to-white flex flex-col max-w-lg mx-auto relative overflow-hidden">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 pt-6">
        <span className="text-xl font-extrabold text-primary tracking-tight">CraveNow</span>
        <button className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
      </header>

      {/* Stacked Images */}
      <div className="relative flex-1 flex items-center justify-center px-6 pt-8 pb-4">
        <div className="relative w-64 h-72">
          {/* Back image — pizza (tilted left) */}
          <div className="absolute -left-8 top-4 w-52 h-52 rounded-3xl overflow-hidden shadow-2xl rotate-[-8deg] border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop&q=80"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Front image — burger (tilted right) */}
          <div className="absolute right-[-20px] top-10 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl rotate-[4deg] border-4 border-white z-10 bg-gradient-to-br from-red-900 to-red-800">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&q=80"
              alt="Burger"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Center icon circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 z-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Text + CTA */}
      <div className="px-8 pb-6 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
          Taste the Joy of<br />Delivery
        </h1>
        <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
          Unlock a world of culinary delights, right at your fingertips.
        </p>

        {/* Get Started Button */}
        <button
          id="get-started-btn"
          onClick={onGetStarted}
          className="w-full py-4 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Tagline */}
        <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.3em]">
          Quick <span className="text-primary mx-1">•</span> Fresh <span className="text-primary mx-1">•</span> Hot
        </p>
      </div>

      {/* Bottom Nav on Welcome too */}
      <nav className="bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around py-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {[
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, label: 'EXPLORE', active: true },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, label: 'SEARCH', active: false },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 14H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v10z"/></svg>, label: 'BAG', active: false },
            { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>, label: 'PROFILE', active: false },
          ].map((tab) => (
            <div
              key={tab.label}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 ${tab.active ? 'text-primary' : 'text-text-secondary'}`}
            >
              {tab.icon}
              <span className="text-[10px] font-bold tracking-wider">{tab.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}
