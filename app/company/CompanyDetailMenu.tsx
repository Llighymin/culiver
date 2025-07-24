import TabMenu from "@/components/ui/TabMenu";

const CompanyDetailMenu = () => {
  const menuList = [
    {
      title: "회사개요",
      tabId: "performance",
    },
    {
      title: "CEO 인사말",
      tabId: "ceo-message",
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
      title: "조직도",
      tabId: "members",
    },
    {
      title: "인증 및 수상",
      tabId: "awards",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="performance" variant="rounded" />;
};

export default CompanyDetailMenu;
