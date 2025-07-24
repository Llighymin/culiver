import TabMenu from "@/components/ui/TabMenu";

const CompanyDetailMenu = () => {
  const menuList = [
    {
      title: "컬리버의 성과",
      tabId: "performance",
    },
    {
      title: "비전 & 미션",
      tabId: "vision",
    },
    {
      title: "주요 연혁",
      tabId: "history",
    },
    {
      title: "더 자세한 정보",
      tabId: "more-info",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="performance" variant="rounded" />;
};

export default CompanyDetailMenu;
