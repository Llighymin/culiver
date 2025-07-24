import TabMenu from "@/components/ui/TabMenu";

const PrMenu = () => {
  const menuList = [
    {
      title: "공지사항",
      tabId: "notice",
    },
    {
      title: "보도자료",
      tabId: "press-release",
    },
    {
      title: "기술자료실",
      tabId: "tech-data",
    },
    {
      title: "FAQ",
      tabId: "faq",
    },
    {
      title: "고객문의",
      tabId: "customer-inquiry",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="notice" variant="rounded" />;
};

export default PrMenu;
