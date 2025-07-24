"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

interface TabItem {
  title: string;
  description?: string;
  tabId: string;
}

interface TabMenuProps {
  tabs: TabItem[];
  defaultTab?: string;
  variant?: "rounded" | "underline";
  className?: string;
}

const TabMenu = ({
  tabs,
  defaultTab,
  variant = "rounded",
  className = "",
}: TabMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || defaultTab || tabs[0]?.tabId;

  const handleTabClick = useCallback(
    (tabId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabId);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const getTabStyles = (isActive: boolean) => {
    if (variant === "underline") {
      return `py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
        isActive
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`;
    }

    return `py-4 px-6 rounded-full font-semibold text-sm transition-colors duration-200 ${
      isActive
        ? "bg-black text-white"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    }`;
  };

  return (
    <div className={`${className}`}>
      <nav
        className={`flex space-x-8 ${
          variant === "underline" ? "border-b border-gray-200" : ""
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.tabId}
            onClick={() => handleTabClick(tab.tabId)}
            className={getTabStyles(currentTab === tab.tabId)}
          >
            <div
              className={variant === "underline" ? "text-left" : "text-center"}
            >
              <div className="font-semibold">{tab.title}</div>
              {tab.description && variant === "underline" && (
                <div className="text-xs text-gray-400 mt-1">
                  {tab.description}
                </div>
              )}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabMenu;
