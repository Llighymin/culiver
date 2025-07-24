import TabMenu from "@/components/ui/TabMenu";

const IrMenu = () => {
  const menuList = [
    {
      title: "재무정보",
      tabId: "financial-info",
    },
    {
      title: "공시정보",
      tabId: "disclosure-info",
    },
    {
      title: "IR자료실",
      tabId: "ir-library",
    },
    {
      title: "기업지배구조",
      tabId: "corporate-governance",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="financial-info" variant="rounded" />;
};

export default IrMenu;
