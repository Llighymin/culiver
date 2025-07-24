"use server";

import { adminDb, firebaseAdmin } from "@/firebaseAdmin";
import { getStorage } from "firebase-admin/storage";
import { cookies } from "next/headers";

interface editProductResponse {
  success: boolean;
  message?: string;
}

export const deleteProductAction = async (
  formData: FormData,
): Promise<editProductResponse> => {
  const cookieStore = await cookies();
  const headCookie = cookieStore.get("head")?.value;

  if (!headCookie) {
    return {
      success: false,
      message: "관리자만 요청이 가능합니다.",
    };
  }

  const data = {
    name: formData.get("productName") as string,
    category: formData.get("category") as string,
    price: formData.get("price") as string,
    outerLink: formData.get("outerLink") as string,
    isPublic: formData.get("isPublic") === "true",
    productId: formData.get("productId") as string,
  }

  const images = formData.getAll("images");
  const existingImages = formData.get("existingImages");

  if (!data) {
    return {
      success: false,
      message: "삭제할 제품 ID가 없습니다.",
    };
  }

  try {
    const productRef = await adminDb.collection("products").doc(data.productId).get();

    if (!productRef.exists) {
      return {
        success: false,
        message: "해당 제품이 존재하지 않습니다.",
      };
    }

    await adminDb.collection("products").doc(data.productId).update({
      name: data.name,
      category: data.category,
      price: Number(data.price),
      outerLink: data.outerLink,
      isPublic: data.isPublic,
      updatedAt: Date.now(),
    });

    let updatedImageUrls: string[] = [];

    if (existingImages && typeof existingImages === "string") {
      updatedImageUrls = JSON.parse(existingImages);
    }

    if (images && images.length > 0) {
      const adminStorage = getStorage(firebaseAdmin);
      const bucket = adminStorage.bucket();

      const newImageUrls = await Promise.all(
        Array.from(images).map(async (image, index) => {
          const file = image as unknown as File;
          const buffer = Buffer.from(await file.arrayBuffer());
          const filePath = `${data.category}/${data.productId}_${index}`;
          const fileRef = bucket.file(filePath);

          await fileRef.save(buffer, {
            metadata: {
              contentType: file.type,
            },
          });

          return `https://storage.googleapis.com/${bucket.name}/${filePath}`;
        }),
      );

      updatedImageUrls = [...updatedImageUrls, ...newImageUrls];
    }

    await adminDb.collection("products").doc(data.productId).update({
      images: updatedImageUrls,
    });
    
    return {
      success: true,
      message: "상품이 수정되었습니다.",
    }
  } catch (error) {
    console.error("상품 수정 중 오류 발생:", error);
    return {
      success: false,
      message: "상품 수정 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
};
