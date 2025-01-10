import { createClient } from "@/utils/supabase/server";
import PostBox from "../components/PostBox";
import Timeline from "../components/Timeline";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-none">
        <PostBox />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Timeline />
      </div>
    </div>
  );
}
