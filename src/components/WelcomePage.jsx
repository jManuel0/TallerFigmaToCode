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
      <div className="px-8 pb-10 text-center space-y-5">
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
    </div>
  )
}
