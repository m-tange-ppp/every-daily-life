"use client";

import { useState, useTransition } from "react";
import { FaHeart } from "react-icons/fa";

type LikeButtonProps = {
  initialLiked: boolean;
  userId: string;
  postId: string;
};

function LikeButton({ initialLiked, userId, postId }: LikeButtonProps) {
  const [liked, setLiked] = useState<boolean>(initialLiked);
  const [isPending, startTransaction] = useTransition();

  function handleLikeToggle(): void {
    startTransaction(async () => {
      if (liked) {
        await unlikePost(postId, userId);
      } else {
        await likePost(postId, userId);
      }
      setLiked(!liked);
    });
  }

  return (
    <button onClick={handleLikeToggle} disabled={isPending}>
      <FaHeart
        className={`transition-colors duration-200 ${
          liked ? "text-red-600" : "text-gray-400"
        }`}
      />
    </button>
  );
}

export default LikeButton;
