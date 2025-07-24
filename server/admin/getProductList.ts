"use server";

import { adminDb } from "@/firebaseAdmin";
import { ProductType } from "@/types/product";
import { cookies } from "next/headers";

export interface getProductsResponse {
  success: boolean;
  message?: string;
  products?: ProductType[];
}

export const getProductList = async (): Promise<getProductsResponse> => {
  const cookieStore = await cookies();
  const headCookie = cookieStore.get("head")?.value;

  if (!headCookie) {
    return {
      success: false,
      message: "관리자만 요청이 가능합니다.",
    };
  }

  try {
    const productsQuery = adminDb
      .collection("products")
      .orderBy("createdAt", "desc")
      .limit(10);
    const productsSnapshot = await productsQuery.get();

    if (productsSnapshot.empty) {
      return {
        success: false,
        products: [],
      };
    }

    const promises = productsSnapshot.docs.map(async (doc) => {
      const docData = doc.data() as ProductType;
      const docId = doc.id;

      return {
        ...docData,
        id: docId,
      };
    });

    const productList = await Promise.all(promises);

    return {
      success: true,
      products: productList,
    };
  } catch (error) {
    console.error("상품 목록 조회 중 오류 발생:", error);
    return {
      success: false,
      message:
        "상품 목록을 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.",
      products: [],
    };
  }
};
