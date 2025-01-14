import React from "react";
import LikeButton from "./LikeButton";

type PostCardProps = {
  author: string;
  content: string;
  createdAt: Date;
  likes: {
    userId: string;
  }[];
};

async function PostCard({ author, content, createdAt, likes }: PostCardProps) {
  const createdAtToString = createdAt.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="rounded-lg shadow-md p-2 border border-green-100">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r to-green-400 from-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold">{author[0]}</span>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-green-900">{author}</h3>
            <p className="text-sm text-green-600">{createdAtToString}</p>
          </div>
        </div>
        <div className="px-4">
          <p className="leading-relaxed mb-2">{content}</p>
          <div className="border-t border-green-200 pt-2">
            <LikeButton initialLiked={false} userId={""} postId={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
