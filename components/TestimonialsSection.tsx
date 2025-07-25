'use client';

import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { LocaleContext } from "@/i18n/LocaleContext";

// 스토리 아이템 타입 정의
interface StoryItem {
  category: string;
  title: string;
  image: string;
}

// 추천사 섹션 번역 타입 정의
interface TestimonialsSectionTranslations {
  title: string;
  description: string;
  newsButton: string;
  stories: {
    category: string;
    title: string;
  }[];
}

const TestimonialsSection = () => {
  const localeContext = useContext(LocaleContext);
  const messages = localeContext?.messages || {};
  
  // 기본값 설정 (폴백용)
  const defaultTranslations: TestimonialsSectionTranslations = {
    title: "Culiver Stories",
    description: "컬리버는 상상과 현실, 기술과 삶을 연결하고 사람들 간의 연결을 만들어갑니다.",
    newsButton: "News",
    stories: [
      {
        category: "People&Culture",
        title: "컬리버의 사람과 문화"
      },
      {
        category: "Service",
        title: "컬리버가 제공하는 서비스"
      },
      {
        category: "Corp",
        title: "컬리버의 기업 이야기"
      }
    ]
  };

  // 번역 데이터 가져오기
  const t: TestimonialsSectionTranslations = messages.TestimonialsSection || defaultTranslations;

  // 이미지 URL은 변경되지 않으므로 고정값 사용
  const imageUrl = "https://www.gicon.or.kr/galleryImgView.es?bid=0001&list_no=1285&seq=5";
  
  // 번역된 스토리 데이터와 고정된 이미지 결합
  const stories: StoryItem[] = t.stories.map(story => ({
    category: story.category,
    title: story.title,
    image: imageUrl
  }));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t.description}
          </p>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block mt-8 text-lg font-bold border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
          >
            {t.newsButton}{" "}
            <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <a key={index} href="#" className="group block">
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <p className="text-primary-blue font-bold">{story.category}</p>
                <h3 className="mt-2 text-xl font-bold group-hover:underline">
                  {story.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;