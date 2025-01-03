import { createClient } from "@/utils/supabase/server";
import PostBox from "../components/PostBox";
import Timeline from "../components/Timeline";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <PostBox />
      <Timeline />
    </div>
  );
}
