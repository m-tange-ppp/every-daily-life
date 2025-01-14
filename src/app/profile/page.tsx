import ProfileCard from "@/components/ProfileCard";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

async function Profile() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  }

  const userId = data.user?.id;

  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return <ProfileCard />;
}

export default Profile;
