import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import StatsGrid from './components/StatsGrid';
import MainChartArea from './components/MainChartArea';
import { NAV_ITEMS } from './constants';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing for responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeTabLabel = NAV_ITEMS.find(item => item.id === activeTab)?.label || 'Dashboard';

  return (
    <div className="dashboard-container min-h-screen flex bg-slate-50">
      {/* Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        <DashboardHeader 
          title={activeTabLabel} 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        <main className="p-4 md:p-8 max-w-[1600px] mx-auto w-full">
          {/* Welcome Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Good morning, Alex!</h2>
            <p className="text-slate-500">Here's what's happening with your projects today.</p>
          </div>

          {/* Key Metrics Grid */}
          <StatsGrid />

          {/* Visualization Section */}
          <MainChartArea />

          {/* Sample Table Section */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-lg">Recent Transactions</h3>
              <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={`https://picsum.photos/seed/${i}/40/40`} className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="text-sm font-semibold text-slate-800">User {i}</p>
                            <p className="text-xs text-slate-500">user{i}@example.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">May {10 + i}, 2024</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">${(120 * i).toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          i % 2 === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {i % 2 === 0 ? 'Completed' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <footer className="mt-auto p-4 border-t border-slate-200 bg-white sticky bottom-0 z-10 flex items-center justify-between">
          <p className="text-xs text-slate-400">© 2024 Insight SaaS Analytics Platform. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="text-xs text-slate-500 hover:text-indigo-600 transition-colors font-medium">Privacy Policy</button>
            <button className="text-xs text-slate-500 hover:text-indigo-600 transition-colors font-medium">Terms of Service</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
