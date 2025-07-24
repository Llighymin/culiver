import TabMenu from "@/components/ui/TabMenu";

const SolutionMenu = () => {
  const menuList = [
    {
      title: "수산양식 연구개발",
      tabId: "aquaculture-rd",
    },
    {
      title: "프로바이오틱스 개발",
      tabId: "probiotics-development",
    },
    {
      title: "수의학 연구",
      tabId: "veterinary-research",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="aquaculture-rd" variant="rounded" />;
};

export default SolutionMenu;