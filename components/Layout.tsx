
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, hideNav = false }) => {
  return (
    <div className="flex flex-col h-full w-full max-w-md mx-auto bg-slate-50 shadow-2xl relative overflow-hidden">
      {/* Content Area */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Tab Navigation */}
      {!hideNav && (
        <nav className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-200 flex items-center justify-around px-4 z-50">
          <TabButton 
            isActive={activeTab === 'home'} 
            onClick={() => onTabChange?.('home')}
            icon={<HomeIcon />}
            label="Home"
          />
          <TabButton 
            isActive={activeTab === 'ai'} 
            onClick={() => onTabChange?.('ai')}
            icon={<BotIcon />}
            label="AI Chat"
          />
          <TabButton 
            isActive={activeTab === 'settings'} 
            onClick={() => onTabChange?.('settings')}
            icon={<SettingsIcon />}
            label="Settings"
          />
        </nav>
      )}
    </div>
  );
};

const TabButton = ({ isActive, onClick, icon, label }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center space-y-1 px-4 py-2 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}
  >
    <div className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform`}>
      {icon}
    </div>
    <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
  </button>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

export default Layout;
