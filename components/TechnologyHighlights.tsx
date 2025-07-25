'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CountUp from 'react-countup';
import { useContext } from 'react';
import { LocaleContext } from '@/i18n/LocaleContext';

// 타입 정의
interface StatItem {
  number: number;
  label: string;
  description: string;
  icon: string;
}

interface TechnologyItem {
  title: string;
  description: string;
  alt: string;
  image?: string;
}

interface TechnologyHighlightsTranslations {
  topSection: {
    tagline: string;
    title: string;
    description: string;
  };
  stats: StatItem[];
  technologies: {
    title: string;
    description: string;
    items: TechnologyItem[];
  };
  viewMoreButton: string;
}

export default function TechnologyHighlights() {
  const localeContext = useContext(LocaleContext);
  const messages = localeContext?.messages || {};
  
  // 기본값 설정 (fallback)
  const defaultTranslations: TechnologyHighlightsTranslations = {
    topSection: {
      tagline: "TECHNOLOGY",
      title: "기술력으로 입증하는 혁신",
      description: "지속적인 연구개발을 통해 수산양식 분야의 기술적 혁신을 선도합니다."
    },
    stats: [
      { number: 15, label: "특허 및 지식재산권", description: "혁신적인 기술력을 바탕으로 다수의 특허를 보유하고 있습니다.", icon: "ri-award-line" },
      { number: 10, label: "연구개발 프로젝트", description: "지속적인 R&D 투자로 미래 기술을 선도합니다.", icon: "ri-flask-line" },
      { number: 25, label: "기술 파트너십", description: "국내외 유수 기업 및 기관과 협력하고 있습니다.", icon: "ri-team-line" },
      { number: 5, label: "연구시설", description: "최첨단 연구 시설을 통해 기술 혁신을 가속화합니다.", icon: "ri-building-line" }
    ],
    technologies: {
      title: "핵심 기술 역량",
      description: "컬리버는 혁신적인 기술을 통해 지속 가능한 미래를 만들어갑니다.",
      items: [
        {
          title: "바이오플락 양식 기술",
          description: "미생물을 활용한 친환경 양식 시스템으로 수질 개선과 생산성 향상을 동시에 실현",
          alt: "바이오플락 양식 기술"
        },
        {
          title: "복합 유용 미생물 개발",
          description: "새우 양식용 특화 프로바이오틱스로 면역력 강화와 성장 촉진 효과 제공",
          alt: "복합 유용 미생물 개발"
        },
        {
          title: "스마트 양식 시스템",
          description: "IoT와 AI 기술을 접목한 자동화 양식 관리 시스템으로 최적의 양식 환경 조성",
          alt: "스마트 양식 시스템"
        }
      ]
    },
    viewMoreButton: "더 많은 기술 보기"
  };
  
  // 번역 데이터 가져오기
  const t: TechnologyHighlightsTranslations = messages.TechnologyHighlights || defaultTranslations;
  
  // 이미지 경로 설정 (번역 데이터에 이미지 경로가 없으므로 기존 이미지 경로 유지)
  const technologies = [
    {
      ...t.technologies.items[0],
      image: 'https://readdy.ai/api/search-image?query=Biofloc%20aquaculture%20technology%20system%20with%20microbial%20flocs%20in%20water%2C%20advanced%20filtration%20equipment%2C%20sustainable%20shrimp%20farming%20technology%2C%20clean%20blue%20water%20with%20biological%20treatment%20systems&width=500&height=300&seq=tech-1&orientation=landscape',
      icon: 'ri-leaf-line',
      bgColor: 'from-green-400 to-blue-500'
    },
    {
      ...t.technologies.items[1],
      image: 'https://readdy.ai/api/search-image?query=Beneficial%20microorganism%20development%20laboratory%20with%20petri%20dishes%2C%20bacterial%20cultures%2C%20microscopic%20research%20equipment%2C%20probiotics%20for%20aquaculture%2C%20clean%20scientific%20environment&width=500&height=300&seq=tech-2&orientation=landscape'
    },
    {
      ...t.technologies.items[2],
      image: '/images/양식장1.jpg'
    }
  ];

  const statVariants: Variants = {
    offscreen: { scale: 0.5, opacity: 0 },
    onscreen: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: i * 0.2,
      },
    }),
  };

  const techVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-orange-500 tracking-widest uppercase">{t.topSection.tagline}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            {t.topSection.title}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.topSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 mb-24">
          {t.stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={statVariants}
              className="text-center relative px-4"
            >
              {index < t.stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
              )}
              <div className="text-orange-500 text-5xl mb-4 flex justify-center items-center h-12">
                <i className={stat.icon}></i>
              </div>
              <p className="text-6xl font-bold text-orange-500">
                <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />
              </p>
              <div className="w-8 h-0.5 bg-gray-400 mx-auto my-6"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{stat.label}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              {t.technologies.title}
            </h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {t.technologies.description}
            </p>
          </div>

          <div className="relative min-h-[1000px] md:min-h-[900px]">
            {/* Technology 1 */}
            <motion.div
              className="absolute top-0 left-0 md:left-[10%]"
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-56 h-80 md:w-64 md:h-96">
                <Image src={technologies[0].image} alt={technologies[0].alt} layout="fill" objectFit="cover" className="rounded-full shadow-2xl"/>
              </div>
              <motion.div 
                className="absolute bottom-10 -right-24 w-64 p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{technologies[0].title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{technologies[0].description}</p>
              </motion.div>
            </motion.div>

            {/* Technology 2 */}
            <motion.div
              className="absolute top-60 right-0 md:right-[10%]"
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-56 h-80 md:w-64 md:h-96 ml-auto">
                <Image src={technologies[1].image} alt={technologies[1].alt} layout="fill" objectFit="cover" className="rounded-full shadow-2xl"/>
              </div>
              <motion.div 
                className="absolute top-16 -left-24 w-64 p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{technologies[1].title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{technologies[1].description}</p>
              </motion.div>
            </motion.div>

            {/* Technology 3 */}
            <motion.div
              className="absolute top-[550px] left-0 md:left-[20%]"
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-56 h-80 md:w-64 md:h-96">
                <Image src={technologies[2].image} alt={technologies[2].alt} layout="fill" objectFit="cover" className="rounded-full shadow-2xl"/>
              </div>
              <motion.div 
                className="absolute bottom-10 -right-24 w-64 p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{technologies[2].title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{technologies[2].description}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            href="/technology"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-700 transition-colors transform hover:scale-105"
          >
            {t.viewMoreButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
