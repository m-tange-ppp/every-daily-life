import React from "react";
import LikeButton from "./LikeButton";
import { prisma } from "@/lib/prisma";

type PostCardProps = {
  authorId: string;
  content: string;
};

async function PostCard({ authorId, content }: PostCardProps) {
  const author = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  return (
    <div className="border border-black rounded-md">
      <p className="text-xl">{author?.name}</p>
      <div className="p-2 flex flex-col gap-2">
        <p>{content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default PostCard;
