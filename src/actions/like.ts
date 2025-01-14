"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function likePost(postId: number, userId: string) {
  try {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error liking post:", error);
    throw new Error("Failed to like post");
  }
}

export async function unlikePost(postId: number, userId: string) {
  try {
    await prisma.like.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error unliking post:", error);
    throw new Error("Failed to unlike post");
  }
}
