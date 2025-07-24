'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const companyLinks = [
  { href: "/company", label: "회사소개" },
  { href: "/products", label: "제품소개" },
  { href: "/solutions", label: "솔루션" },
  { href: "/cases", label: "고객사례" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
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
              <div className="text-3xl font-bold text-white mb-4">Culiver</div>
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
                    주소: 전라남도 순천시 태봉길 3, 4층 401호
                </p>
                <p>
                  
                    대표: 김정석
                  
                </p>
                <p>
                  
                    사업자등록번호: 010-3620-6922
                  
                </p>
                <p>
                  
                    연락처: 061-123-4567 | contact@culiver.com
                  
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Culiver Inc. All rights reserved.
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