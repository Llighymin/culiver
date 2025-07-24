'use client';

import { useState } from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import DashboardOverview from './components/DashboardOverview';
import ContentManagement from './components/ContentManagement';
import ProductManagement from './components/ProductManagement';
import MonitoringDashboard from './components/MonitoringDashboard';
import BoardManagement from './components/BoardManagement';
import UserManagement from './components/UserManagement';
import StatisticsAnalysis from './components/StatisticsAnalysis';
import SystemManagement from './components/SystemManagement';

export default function AdminPage() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'content':
        return <ContentManagement />;
      case 'product':
        return <ProductManagement />;
      case 'monitoring':
        return <MonitoringDashboard />;
      case 'board':
        return <BoardManagement />;
      case 'user':
        return <UserManagement />;
      case 'statistics':
        return <StatisticsAnalysis />;
      case 'system':
        return <SystemManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}