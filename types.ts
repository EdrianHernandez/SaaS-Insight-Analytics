
export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  revenue: number;
  users: number;
}

export interface NavItem {
  id: string;
  label: string;
  iconName: string;
}
