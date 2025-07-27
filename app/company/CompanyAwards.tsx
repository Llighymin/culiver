import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const awardsData = [
	{
		year: 2023,
		title: "기술 혁신상",
		description:
			"혁신적인 기술 개발 및 상용화에 대한 공로를 인정받아 수상했습니다.",
	},
	{
		year: 2022,
		title: "ISO 9001 인증",
		description:
			"국제 표준 품질 경영 시스템 인증을 획득하여 제품 및 서비스의 신뢰성을 입증했습니다.",
	},
	{
		year: 2021,
		title: "대한민국 소프트웨어 대상",
		description: "국내 최고 권위의 소프트웨어 상을 수상하여 기술력을 인정받았습니다.",
	},
	{
		year: 2020,
		title: "올해의 유망 기업 선정",
		description:
			"빠른 성장세와 잠재력을 인정받아 올해의 유망 기업으로 선정되었습니다.",
	},
];

const Awards = () => {
	return (
		<div className="py-12">
			<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
				인증 및 수상
			</h2>
			<p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
				우리의 노력과 혁신은 수많은 인증과 수상을 통해 인정받고 있습니다.
			</p>
			<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{awardsData.map((award) => (
					<Card key={award.year} className="text-center">
						<CardHeader>
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Award className="h-6 w-6 text-primary" />
							</div>
							<CardTitle className="text-xl font-semibold pt-4">
								{award.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600">{award.description}</p>
							<p className="text-sm text-gray-400 mt-4">
								{award.year}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Awards;
