import TabMenu from "@/components/ui/TabMenu";

const CasesMenu = () => {
  const menuList = [
    {
      title: "연구개발 현황",
      tabId: "rd-status",
    },
    {
      title: "특허 및 지식재산권",
      tabId: "patents",
    },
    {
      title: "연구시설",
      tabId: "research-facilities",
    },
    {
      title: "기술 파트너십",
      tabId: "tech-partnership",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="rd-status" variant="rounded" />;
};

export default CasesMenu;
