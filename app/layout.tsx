import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
	title: "GreenWhale",
	description: "GreenWhale",
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
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
