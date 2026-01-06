
import React from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick, title }) => {
  return (
    <header className="dashboard-header h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-40 backdrop-blur-sm bg-white/80">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold text-slate-800 hidden md:block">{title}</h1>
      </div>

      <div className="flex items-center gap-4 md:gap-8 flex-1 justify-end max-w-2xl">
        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-4 py-1.5 w-full max-w-xs focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
          <Search size={16} className="text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search analytics..." 
            className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-600 placeholder:text-slate-400"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block"></div>

          <button className="flex items-center gap-2 group p-1 pr-2 rounded-full hover:bg-slate-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 overflow-hidden ring-2 ring-transparent group-hover:ring-indigo-500/20">
              <img src="https://picsum.photos/seed/user123/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-slate-800 leading-none">Alex Thompson</p>
              <p className="text-[10px] text-slate-500">Admin</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
