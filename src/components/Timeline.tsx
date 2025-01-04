import React from "react";
import PostCard from "./PostCard";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

async function Timeline() {
  const supabase = await createClient();

  await supabase.auth.getUser();

  const allPosts = await prisma.post.findMany({
    include: {
      author: true,
      likes: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="space-y-2">
      {allPosts.map((post, index) => (
        <PostCard
          key={index}
          author={post.author.name}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}

export default Timeline;
