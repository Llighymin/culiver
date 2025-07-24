"use client";

import { useState } from "react";
import Image from "next/image";

const products = {
  gw7100: {
    tabTitle: "GW 7100",
    title: "GW 7100",
    subtitle: "음식물 폐기물 처리용 미생물",
    description: [
      "음식물 폐기물 감량처리용 복합 미생물제,",
      "음식물 폐기물 발효, 분해, 소멸 처리용 복합미생물제",
    ],
    image:
      "/images/product-1.png",
  },
  gw7200: {
    tabTitle: "GW 7200",
    title: "GW 7200",
    subtitle: "축산 폐기물 처리용 미생물",
    description: [
      "축산 폐기물 처리용 복합미생물 제, 축산폐기물 감량 처리용 복합미생물 제,",
      "축산 폐기물 발효, 분해, 소멸 처리용 복합미생물제, 가축 분뇨 처리용 미생물 제.",
    ],
    image:
      "/images/product-1.png",
  },
  gw7300: {
    tabTitle: "GW 7300",
    title: "GW 7300",
    subtitle: "음폐수 처리용 복합 미생물",
    description: [
      "수 처리용 복합미생물 제, 하폐수 처리용 복합 미생물 제,",
      "음폐수 처리용 복합미생물 제, 음폐수 감량 처리용 복합미생물 제",
    ],
    image:
      "/images/product-1.png",
  },
  gw100: {
    tabTitle: "GREEN WHALE-100",
    title: "GREEN WHALE-100 (GW-100)",
    subtitle:
      "복합미생물과 유기성 폐기물의 기계의 역학 관계를 분석, 적정한 발효, 분해, 소멸을 위한 원스톱 소멸 솔루션",
    description: ["- 특허제 10-2167765호 (음식물류 폐기물 처리기)"],
    image:
      "/images/product-1.png",
  },
};

type ProductKey = keyof typeof products;

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<ProductKey>("gw7100");

  const activeProduct = products[activeTab];

  return (
    <section id="products-section" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            혁신적인 제품 라인업
          </h2>
          <p className="text-lg text-gray-600">
            그린웨일은 다양한 유기성 폐기물에 최적화된 맞춤형 미생물 및 솔루션을
            제공하여, 어떤 환경에서도 최고의 효율을 보장합니다.
          </p>
        </div>
        <div
          id="product-tabs"
          className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 border-b"
        >
          {Object.keys(products).map((key) => (
            <button
              key={key}
              className={`product-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key as ProductKey)}
            >
              {products[key as ProductKey].tabTitle}
            </button>
          ))}
        </div>
        <div id="product-content" className="relative">
          <div
            className="product-panel active"
            style={{ animation: "content-fade-in 0.6s ease-out" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-xl text-green-whale font-bold">
                  {activeProduct.title}
                </h3>
                <p
                  className="text-3xl md:text-4xl font-bold mt-2 mb-8"
                  dangerouslySetInnerHTML={{ __html: activeProduct.subtitle }}
                ></p>
                <div className="space-y-2 text-gray-600">
                  {activeProduct.description.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={activeProduct.image}
                  layout="fill"
                  objectFit="cover"
                  className="product-image"
                  alt={activeProduct.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .product-tab {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 700;
          color: #888;
          border-bottom: 3px solid transparent;
          transition: color 0.3s, border-color 0.3s;
          margin-bottom: -2px;
        }
        @media (min-width: 768px) {
          .product-tab {
            font-size: 1.125rem;
          }
        }
        .product-tab:hover {
          color: var(--green-whale);
        }
        .product-tab.active {
          color: var(--nhn-black);
          border-bottom-color: var(--green-whale);
        }
        .product-panel {
          display: none;
        }
        .product-panel.active {
          display: block;
        }
        @keyframes content-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .product-image {
          transition: transform 0.5s ease-out;
        }
        .product-panel.active .product-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;