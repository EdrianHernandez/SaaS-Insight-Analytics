
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Settings, 
  BarChart3, 
  MessageSquare,
  HelpCircle,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';
import { NavItem, Metric, ChartDataPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', iconName: 'LayoutDashboard' },
  { id: 'analytics', label: 'Analytics', iconName: 'BarChart3' },
  { id: 'customers', label: 'Customers', iconName: 'Users' },
  { id: 'billing', label: 'Billing', iconName: 'CreditCard' },
  { id: 'messages', label: 'Messages', iconName: 'MessageSquare' },
  { id: 'settings', label: 'Settings', iconName: 'Settings' },
];

export const MOCK_METRICS: Metric[] = [
  { label: 'Total Revenue', value: '$128,430', change: '+12.5%', trend: 'up', icon: 'DollarSign' },
  { label: 'Active Users', value: '2,420', change: '+18.2%', trend: 'up', icon: 'Users' },
  { label: 'Churn Rate', value: '2.4%', change: '-0.8%', trend: 'down', icon: 'UserMinus' },
  { label: 'Avg. Order Value', value: '$42.50', change: '+3.1%', trend: 'up', icon: 'ShoppingCart' },
];

export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];

export const TrendIcon = ({ trend }: { trend: Metric['trend'] }) => {
  switch (trend) {
    case 'up': return <TrendingUp className="w-4 h-4 text-emerald-500" />;
    case 'down': return <TrendingDown className="w-4 h-4 text-rose-500" />;
    default: return <Minus className="w-4 h-4 text-slate-400" />;
  }
};
