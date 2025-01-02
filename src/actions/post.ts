"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function createPost(userId: string, formData: FormData) {
  const content = formData.get("content") as string;

  const postData: Prisma.PostCreateInput = {
    content: content,
    author: {
      connect: {
        id: userId,
      },
    },
  };

  await prisma.post.create({
    data: postData,
  });
}
