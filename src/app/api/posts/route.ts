import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const POSTS_PER_PAGE = 10;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;

  const posts = await prisma.post.findMany({
    take: POSTS_PER_PAGE,
    skip: (page - 1) * POSTS_PER_PAGE,
    include: {
      author: {
        select: {
          name: true,
        },
      },
      likes: {
        select: {
          userId: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}
