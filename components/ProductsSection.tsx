"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud, Droplets, ShieldCheck, Fish } from "lucide-react";
import { useContext } from "react";
import { LocaleContext } from "@/i18n/LocaleContext";

// 제품 아이템에 대한 타입 정의
interface ProductItem {
	icon: React.ReactNode;
	title: string;
	description: string;
	image: string;
}

// 제품 섹션 번역 타입 정의
interface ProductsSectionTranslations {
	title: string;
	description: string;
	products: {
		title: string;
		description: string;
	}[];
}

const ProductsSection = () => {
	const localeContext = useContext(LocaleContext);
	const messages = localeContext?.messages || {};

	// 기본 번역 데이터 (폴백용)
	const defaultTranslations: ProductsSectionTranslations = {
		title: "스마트양식장의 혁신적 특징",
		description: "컬리버의 스마트양식 시스템은 최첨단 IoT 기술과 빅데이터 분석을 통해 양식 환경을 최적화하고 생산성을 극대화합니다.",
		products: [
			{
				title: "실시간 수질 모니터링",
				description: "pH, 용존산소, 온도, 염도 등 핵심 수질 지표를 24시간 실시간으로 모니터링하고 이상 징후 발생 시 즉시 알림을 제공합니다.",
			},
			{
				title: "자동 급이 시스템",
				description: "AI 기반 알고리즘으로 새우의 성장 단계와 활동량에 따라 최적의 사료 공급량과 주기를 자동으로 조절합니다.",
			},
			{
				title: "질병 예방 및 조기 경보",
				description: "빅데이터 분석을 통해 질병 발생 패턴을 예측하고, 이상 징후 감지 시 선제적 대응 방안을 제시합니다.",
			},
			{
				title: "클라우드 기반 원격 제어",
				description: "언제 어디서나 모바일 기기를 통해 양식장 상태를 확인하고 원격으로 시스템을 제어할 수 있습니다.",
			},
		],
	};

	// 번역 데이터 가져오기
	const t: ProductsSectionTranslations = messages.ProductsSection || defaultTranslations;

	// 아이콘 요소는 변경되지 않으므로 원본 유지
	const icons = [
		<Droplets key="droplets" className="w-10 h-10 text-sky-500" />,
		<Fish key="fish" className="w-10 h-10 text-teal-500" />,
		<ShieldCheck key="shield" className="w-10 h-10 text-emerald-500" />,
		<Cloud key="cloud" className="w-10 h-10 text-indigo-500" />,
	];

	// 이미지 URL은 변경되지 않으므로 원본 유지
	const imageUrls = [
		"images/products-1.jpeg",
		"images/products-2.jpeg",
		"images/products-3.jpeg",
		"images/products-4.jpeg",
	];

	// 번역된 제품 데이터와 고정된 이미지/아이콘 결합
	const products: ProductItem[] = t.products.map((product, index) => ({
		icon: icons[index],
		title: product.title,
		description: product.description,
		image: imageUrls[index],
	}));

	return (
		<section className="bg-gray-100 dark:bg-black py-20 md:py-24">
			<div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
						{t.title}
					</h2>
					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
						{t.description}
					</p>
				</motion.div>
			</div>

			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center gap-16">
					{products.map((product, i) => (
						<motion.div
							key={product.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: i * 0.1 }}
							className="w-full max-w-5xl"
						>
							<div className="relative grid grid-cols-1 items-center gap-10 rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-2xl md:grid-cols-2 md:p-12">
								<div className="flex flex-col justify-center">
									<div className="mb-4">{product.icon}</div>
									<h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
										{product.title}
									</h3>
									<p className="text-base text-gray-600 dark:text-gray-300 md:text-lg">
										{product.description}
									</p>
								</div>
								<div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80">
									<Image
										src={product.image}
										alt={product.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;