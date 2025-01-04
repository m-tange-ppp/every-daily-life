import React from "react";
import LikeButton from "./LikeButton";

type PostCardProps = {
  author: string;
  content: string;
  createdAt: Date;
};

async function PostCard({ author, content, createdAt }: PostCardProps) {
  const createdAtToString = createdAt.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="border border-black rounded-md">
      <div className="flex justify-between">
        <p className="text-xl">{author}</p>
        <p>{createdAtToString}</p>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <p>{content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default PostCard;
