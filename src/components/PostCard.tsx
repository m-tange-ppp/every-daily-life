import React from "react";

type PostCardProps = {
  user: string;
  content: string;
};

function PostCard(props: PostCardProps) {
  const user = props.user;
  const content = props.content;

  return (
    <div className="border border-black">
      <p className="text-xl">{user}</p>
      <p className="p-2">{content}</p>
    </div>
  );
}

export default PostCard;
