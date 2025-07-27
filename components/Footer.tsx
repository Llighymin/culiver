'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LocaleContext";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, createPathWithLocale } from "@/i18n.config";

// companyLinks는 이제 동적으로 생성됩니다

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  
  const companyLinks = [
    { href: "/company", label: t('Header.company') },
    { href: "/products", label: t('Header.products') },
    { href: "/solutions", label: t('Header.solutions') },
    { href: "/cases", label: t('Header.cases') },
    { href: "/pr", label: t('Header.pr') },
  ];
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/culiver_logo.png"
                  alt="Culiver"
                  width={140}
                  height={28}
                  className="brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                첨단 기술과 친환경 솔루션으로 지속가능한 수산양식의 미래를
                선도합니다.
              </p>
            </motion.div>
          </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 md:col-span-2"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                주식회사 컬리버
              </h3>
              <div className="text-sm space-y-3 text-gray-400">
                <p>
                    {t('Footer.address')}
                </p>
                <p>
                    {t('Footer.phone')}
                </p>
                <p>
                    {t('Footer.email')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            {t('Footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              이용약관
            </Link>
          </div>
        </div>
      
    </footer>
  );
}