"use server";

import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  const userId = data.user?.id;

  const content = formData.get("content") as string;

  const postData: Prisma.PostCreateInput = {
    content: content,
    author: {
      connect: {
        id: userId,
      },
    },
  };

  await prisma.post.create({
    data: postData,
  });

  revalidatePath("/", "layout");
  redirect("/");
}
