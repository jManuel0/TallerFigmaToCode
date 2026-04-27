export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-6 pb-2">
      {/* Left — Flag + Location */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-xl shadow-sm">
          🇨🇦
        </div>
        <div>
          <p className="text-[10px] font-medium text-text-secondary uppercase tracking-widest">
            Canada
          </p>
          <button className="flex items-center gap-0.5 text-sm font-semibold text-text-primary">
            Vancouver
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right — Notification bell */}
      <button
        id="topbar-notification-btn"
        className="relative w-10 h-10 bg-card rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {/* Notification dot */}
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full" />
      </button>
    </header>
  )
}
