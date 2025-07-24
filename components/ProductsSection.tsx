"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Cloud,
  Droplets,
  ShieldCheck,
  Fish,
  Thermometer,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Droplets className="w-10 h-10 text-sky-500" />,
    title: "실시간 수질 모니터링",
    description:
      "pH, 용존산소, 온도, 염도 등 핵심 수질 지표를 24시간 실시간으로 모니터링하고 이상 징후 발생 시 즉시 알림을 제공합니다.",
  },
  {
    icon: <Fish className="w-10 h-10 text-sky-500" />,
    title: "자동 급이 시스템",
    description:
      "AI 기반 알고리즘으로 새우의 성장 단계와 활동량에 따라 최적의 사료 공급량과 주기를 자동으로 조절합니다.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-sky-500" />,
    title: "질병 예방 및 조기 경보",
    description:
      "빅데이터 분석을 통해 질병 발생 패턴을 예측하고, 이상 징후 감지 시 선제적 대응 방안을 제시합니다.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-sky-500" />,
    title: "클라우드 기반 원격 제어",
    description:
      "언제 어디서나 모바일 기기를 통해 양식장 상태를 확인하고 원격으로 시스템을 제어할 수 있습니다.",
  },
];

const ProductsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            스마트양식장의 혁신적 특징
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            컬리버의 스마트양식 시스템은 최첨단 IoT 기술과 빅데이터 분석을 통해
            양식 환경을 최적화하고 생산성을 극대화합니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto mb-20 md:mb-32"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-6 p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg dark:hover:bg-gray-800"
            >
              <div className="flex-shrink-0 p-3 bg-sky-100 dark:bg-sky-900/50 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full group"
      >
        <div className="relative aspect-[16/9] max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/양식장1.jpg"
            alt="스마트 양식장 시스템"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
              미래의 양식, 오늘 경험하세요.
            </h3>
            <p className="text-lg text-gray-200 mt-2 max-w-2xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              데이터 기반의 정밀한 관리로 지속가능한 수산양식의 새로운 기준을
              제시합니다.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsSection;