import TabMenu from "@/components/ui/TabMenu";

const ProductMenu = () => {
  const menuList = [
    {
      title: "제품 카탈로그",
      tabId: "product-catalog",
    },
    {
      title: "온라인 견적 요청",
      tabId: "online-quote",
    },
    {
      title: "스마트스토어",
      tabId: "smart-store",
    },
  ];

  return <TabMenu tabs={menuList} defaultTab="product-catalog" variant="rounded" />;
};

export default ProductMenu;
