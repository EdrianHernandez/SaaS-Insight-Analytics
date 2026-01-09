import React from 'react';
import { DollarSign, Users, UserMinus, ShoppingCart } from 'lucide-react';
import { MOCK_METRICS, TrendIcon } from '../constants';

const iconMap = {
  DollarSign,
  Users,
  UserMinus,
  ShoppingCart
};

const StatsGrid = () => {
  return (
    <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {MOCK_METRICS.map((metric, index) => {
        const Icon = iconMap[metric.icon];
        
        return (
          <div 
            key={index} 
            className="metric-card bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{metric.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${
                metric.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
              } group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <TrendIcon trend={metric.trend} />
              <span className={`text-xs font-bold ${
                metric.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {metric.change}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
