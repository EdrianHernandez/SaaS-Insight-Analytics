
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Settings, 
  BarChart3, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
}

const iconMap: Record<string, any> = {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  MessageSquare
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  return (
    <aside 
      className={`sidebar-container fixed top-0 left-0 h-full bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out z-50 flex flex-col ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
          S
        </div>
        <span className={`ml-3 font-semibold text-white whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          Insight SaaS
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1 px-3">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName];
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`sidebar-item w-full flex items-center py-2.5 px-3 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-indigo-600/10 text-indigo-400' 
                      : 'hover:bg-slate-800 text-slate-400 hover:text-slate-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-indigo-400' : 'group-hover:text-slate-100'}`} />
                  <span className={`ml-3 text-sm font-medium whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Area */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center w-full px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors group">
          <LogOut className="w-5 h-5 shrink-0 group-hover:text-rose-400" />
          <span className={`ml-3 text-sm font-medium transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            Logout
          </span>
        </button>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 w-full h-8 flex items-center justify-center bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
