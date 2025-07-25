"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { LocaleContext } from "@/i18n/LocaleContext";

// 서비스 아이템 타입 정의
interface ServiceItem {
  title: string;
  description: string;
  alt: string;
}

// AboutSection에서 사용할 번역 타입 정의
interface AboutSectionTranslations {
  tagline: string;
  title: string;
  description: string;
  viewmore: string;
  services: ServiceItem[];
}

const defaultTranslations: AboutSectionTranslations = {
  tagline: "첨단 기술과 친환경 솔루션",
  title: "핵심 사업 영역",
  description: "컬리버는 첨단 기술과 친환경 솔루션을 통해 수산양식 산업의 지속가능한 발전을 이끌어갑니다.",
  viewmore: "Viewmore",
  services: [
    {
      title: "흰다리새우 양식",
      description: "최적화된 환경에서 고품질 흰다리새우를 생산하는 첨단 양식 시스템을 제공합니다. 질병 관리부터 성장 최적화까지 전 과정을 관리합니다.",
      alt: "흰다리새우 양식",
    },
    {
      title: "보조사료(미생물제제)",
      description: "수질 개선과 면역력 강화를 위한 미생물 제제를 개발 및 공급합니다. 유해균 억제와 소화 효율 증진에 탁월한 효과가 있습니다.",
      alt: "보조사료(미생물제제)",
    },
    {
      title: "스마트양식장 솔루션",
      description: "IoT 기반의 실시간 모니터링 시스템과 자동화 솔루션으로 양식장 운영을 최적화합니다. 수질, 급이, 질병 관리를 통합적으로 제어합니다.",
      alt: "스마트양식장 솔루션",
    },
  ],
};

const AboutSection = () => {
  const localeContext = useContext(LocaleContext);
  const messages = localeContext?.messages || {};
  const t: AboutSectionTranslations = messages.AboutSection || defaultTranslations;

  return (
    <section className="bg-white dark:bg-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              {t.tagline}
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              {t.title}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-md mt-4 md:hidden">
              {t.description}
            </p>
          </div>
          <div className="md:w-1/2 text-left md:text-right">
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-md ml-auto mb-4 hidden md:block">
              {t.description}
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {t.viewmore}{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services && t.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-8 text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              <div className="relative w-full h-56 mt-4">
                <Image
                  src="/images/product-1.png"
                  alt={service.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;