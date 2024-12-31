import React from "react";
import PostCard from "./PostCard";

function Timeline() {
  return (
    <div>
      <PostCard user="test" content="testtesttest" />
      <PostCard user="てすと" content="てすとてすとてすと" />
      <PostCard user="てすと" content="てすとてすとてすと" />
      <PostCard user="てすと" content="てすとてすとてすと" />
    </div>
  );
}

export default Timeline;
