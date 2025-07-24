'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CountUp from 'react-countup';

export default function TechnologyHighlights() {
  const stats = [
    { number: 15, label: '특허 및 지식재산권', icon: 'ri-award-line' },
    { number: 10, label: '연구개발 프로젝트', icon: 'ri-flask-line' },
    { number: 25, label: '기술 파트너십', icon: 'ri-team-line' },
    { number: 5, label: '연구시설', icon: 'ri-building-line' }
  ];

  const technologies = [
    {
      title: '바이오플락 양식 기술',
      description: '미생물을 활용한 친환경 양식 시스템으로 수질 개선과 생산성 향상을 동시에 실현',
      image: 'https://readdy.ai/api/search-image?query=Biofloc%20aquaculture%20technology%20system%20with%20microbial%20flocs%20in%20water%2C%20advanced%20filtration%20equipment%2C%20sustainable%20shrimp%20farming%20technology%2C%20clean%20blue%20water%20with%20biological%20treatment%20systems&width=500&height=300&seq=tech-1&orientation=landscape'
    },
    {
      title: '복합 유용 미생물 개발',
      description: '새우 양식용 특화 프로바이오틱스로 면역력 강화와 성장 촉진 효과 제공',
      image: 'https://readdy.ai/api/search-image?query=Beneficial%20microorganism%20development%20laboratory%20with%20petri%20dishes%2C%20bacterial%20cultures%2C%20microscopic%20research%20equipment%2C%20probiotics%20for%20aquaculture%2C%20clean%20scientific%20environment&width=500&height=300&seq=tech-2&orientation=landscape'
    },
    {
      title: '스마트 양식 시스템',
      description: 'IoT와 AI 기술을 접목한 자동화 양식 관리 시스템으로 최적의 양식 환경 조성',
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            기술력으로 입증하는 혁신
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            지속적인 연구개발을 통해 수산양식 분야의 기술적 혁신을 선도합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={statVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-sky-100 dark:bg-sky-900/50 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-3xl text-sky-600 dark:text-sky-400`}></i>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-2">
                <CountUp end={stat.number} duration={2.5} suffix="+" />
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={techVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
            >
              <div className="md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{tech.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/technology"
            className="inline-block bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-700 transition-colors transform hover:scale-105"
          >
            더 많은 기술 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
