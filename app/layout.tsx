import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import PageLayout from "@/components/PageLayout";
import { LocaleProvider } from "@/i18n/LocaleContext";

const notoSansKr = Noto_Sans_KR({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-noto-sans-kr",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Culiver - (주)컬리버",
	description: "Culiver - Sustainable Aquaculture Solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" suppressHydrationWarning={true}>
			<body
				className={`${notoSansKr.variable} ${roboto.variable} font-sans text-nhn-black bg-white`}
			>
				<LocaleProvider>
					<PageLayout>{children}</PageLayout>
				</LocaleProvider>
			</body>
		</html>
	);
}
