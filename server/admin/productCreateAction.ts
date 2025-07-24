"use server";

import { adminDb, firebaseAdmin } from "@/firebaseAdmin";
import { getStorage } from "firebase-admin/storage";
import { cookies } from "next/headers";

interface ProductCreateActionResponse {
  success: boolean;
  message?: string;
}

export const productCreateAction = async (formData: FormData): Promise<ProductCreateActionResponse> => {
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
  };

  const images = formData.getAll("images");

  if (!data) {
    return {
      success: false,
      message: "필요한 데이터를 다시 확인해주세요.",
    };
  }

  try {
    const createProduct = await adminDb.collection("products").add({
      name: data.name,
      category: data.category,
      price: Number(data.price),
      outerLink: data.outerLink,
      isPublic: data.isPublic,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    if (images && images.length > 0) {
      const adminStorage = getStorage(firebaseAdmin);
      const bucket = adminStorage.bucket();

      const imageUrls = await Promise.all(
        Array.from(images).map(async (image, index) => {
          const file = image as unknown as File;
          const buffer = Buffer.from(await file.arrayBuffer());
          const filePath = `${data.category}/${createProduct.id}_${index}`;
          const fileRef = bucket.file(filePath);

          await fileRef.save(buffer, {
            metadata: {
              contentType: file.type,
            }
          });

          return `https://storage.googleapis.com/${bucket.name}/${filePath}`;
        })
      );

      await adminDb.collection("products").doc(createProduct.id).update({
        images: imageUrls,
      });
    }

    return {
      success: true,
      message: "상품이 등록되었습니다.",
    }
  } catch (error) {
    console.error("상품 등록 중 오류 발생:", error);
    return {
      success: false,
      message: "상품 등록 중 오류가 발생했습니다. 다시 시도해주세요.",
    }
  }
}