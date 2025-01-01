import React from "react";
import LikeButton from "./LikeButton";

type PostCardProps = {
  user: string;
  content: string;
};

function PostCard(props: PostCardProps) {
  const user = props.user;
  const content = props.content;

  return (
    <div className="border border-black rounded-md">
      <p className="text-xl">{user}</p>
      <div className="p-2 flex flex-col gap-2">
        <p>{content}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default PostCard;
