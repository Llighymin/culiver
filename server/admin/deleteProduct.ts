"use server";

import { adminDb, firebaseAdmin } from "@/firebaseAdmin";
import { getStorage } from "firebase-admin/storage";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface DeleteProductResponse {
  success: boolean;
  message?: string;
}

export const deleteProductAction = async (
  productId: string
): Promise<DeleteProductResponse> => {
  const cookieStore = await cookies();
  const headCookie = cookieStore.get("head")?.value;

  if (!headCookie) {
    return {
      success: false,
      message: "관리자만 요청이 가능합니다.",
    };
  }

  if (!productId) {
    return {
      success: false,
      message: "삭제할 제품 ID가 없습니다.",
    };
  }

  try {
    const productRef = await adminDb.collection("products").doc(productId).get();

    if (!productRef.exists) {
      return {
        success: false,
        message: "해당 제품이 존재하지 않습니다.",
      };
    }

    const productData = productRef.data();

    if (productData?.images) {
      const adminStorage = getStorage(firebaseAdmin);
      const bucket = adminStorage.bucket();
      const filePath = `${productData.category}/${productId}`;

      try {
        await bucket.file(filePath).delete();
      } catch (storageError) {
        console.error("이미지 삭제 중 오류: ", storageError);
      }
    }

    await adminDb.collection("products").doc(productId).delete();
    revalidatePath("/admin");

    return {
      success: true,
      message: "제품이 삭제되었습니다.",
    };
  } catch (error) {
    console.error("제품 삭제 중 오류 발생:", error);
    return {
      success: false,
      message: "제품 삭제 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
};
