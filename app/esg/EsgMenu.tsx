import TabMenu from "@/components/ui/TabMenu";

const EsgMenu = () => {
  const menuList = [
    {
      title: "친환경 양식",
      tabId: "eco-friendly-aquaculture",
    },
    {
      title: "사회적 책임",
      tabId: "social-responsibility",
    },
    {
      title: "윤리경영",
      tabId: "ethical-management",
    },
    {
      title: "ESG 경영",
      tabId: "esg-management",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="esg-management" variant="rounded" />;
};

export default EsgMenu;
