import React from "react";
import PostCard from "./PostCard";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/prisma";

async function Timeline() {
  const supabase = await createClient();

  await supabase.auth.getUser();

  const allPosts = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="space-y-2">
      {allPosts.map((post, index) => (
        <PostCard key={index} authorId={post.authorId} content={post.content} />
      ))}
    </div>
  );
}

export default Timeline;
