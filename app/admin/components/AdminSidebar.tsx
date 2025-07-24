'use client';

interface AdminSidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function AdminSidebar({ activeMenu, setActiveMenu }: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: '대시보드', icon: 'ri-dashboard-line' },
    { id: 'content', label: 'CMS 관리', icon: 'ri-file-text-line' },
    { id: 'product', label: '제품 관리', icon: 'ri-box-3-line' },
    { id: 'monitoring', label: '실시간 모니터링', icon: 'ri-radar-line' },
    { id: 'board', label: '게시판 관리', icon: 'ri-article-line' },
    { id: 'user', label: '사용자 관리', icon: 'ri-user-line' },
    { id: 'statistics', label: '통계 분석', icon: 'ri-bar-chart-line' },
    { id: 'system', label: '시스템 관리', icon: 'ri-settings-line' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">컬리버 관리자</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-50 transition-colors whitespace-nowrap ${
              activeMenu === item.id
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <i className={`${item.icon} w-5 h-5 flex items-center justify-center mr-3`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}