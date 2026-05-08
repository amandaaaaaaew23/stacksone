import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, walletButton }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { id: 'home', label: 'Overview', icon: '◱', path: '/home' },
    { id: 'tasks', label: 'Protocol Tasks', icon: '≡', path: '/tasks' },
    { id: 'vault', label: 'Treasury Vault', icon: '⧉', path: '/vault' }, 
    { id: 'gaming', label: 'Engagement', icon: '⍐', path: '/gaming' }, 
    { id: 'profile', label: 'Identity', icon: '⍥', path: '/profile' }
  ];

  return (
    <div className="min-h-screen flex bg-app-bg text-zinc-200 font-sans overflow-hidden selection:bg-app-accent selection:text-white">

      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 hidden md:flex flex-col border-r border-app-border bg-app-bg z-20 transition-all">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-black shadow-sm">
            G
          </div>
          <span className="font-bold tracking-tight text-lg text-white">
            GENESIS
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-6">
          {menuItems.map((item) => {
            const isActive = currentPath.includes(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 text-sm font-medium group ${
                  isActive
                    ? 'bg-app-card text-white shadow-sm'
                    : 'text-app-muted hover:bg-zinc-800/50 hover:text-zinc-200'
                }`}
              >
                <span className={`text-lg transition-transform duration-200 ${isActive ? 'scale-110 text-app-accent' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col relative overflow-y-auto h-screen scroll-smooth">
        {/* HEADER */}
        <header className="sticky top-0 z-10 bg-app-bg/80 backdrop-blur-md border-b border-app-border px-8 py-4 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-2 text-app-muted text-xs uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle"></span>
            Mainnet Environment
          </div>
          <div>
            {walletButton}
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-6 md:p-8 max-w-5xl w-full flex-1 animate-fade-in mx-auto">
          {children}
        </div>

        {/* FOOTER */}
        <footer className="w-full border-t border-app-border py-8 mt-auto pb-24 md:pb-8 bg-app-bg">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-app-muted text-[10px] font-bold uppercase tracking-widest">
              Join The Ecosystem
            </span>
            <div className="flex items-center gap-6">
              <a href="https://t.me/+urf3qEq3FkE2NDA1" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                Telegram
              </a>
              <a href="https://x.com/stacksone_ngasal" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                X (Twitter)
              </a>
              <a href="https://discord.gg/ngasaldulu" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                Discord
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-app-bg/95 backdrop-blur-xl border-t border-app-border flex justify-around py-3 z-30 px-2 pb-safe">
        {menuItems.map((item) => {
          const isActive = currentPath.includes(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
                isActive ? 'text-white' : 'text-app-muted'
              }`}
            >
              <span className={`text-xl ${isActive ? 'text-app-accent' : ''}`}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
