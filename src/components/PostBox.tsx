import { createPost } from "@/actions/post";
import React from "react";

function PostBox() {
  return (
    <div className="bg-gradient-to-br from-emerald-200 to-green-200 p-2 rounded-xl shadow-lg">
      <form action={createPost} className="flex flex-col gap-2">
        <textarea
          name="content"
          id="content"
          placeholder="あなたのdaily lifeは？"
          maxLength={100}
          required
          className="resize-none w-full h-40 bg-white/70 backdrop-blur-sm border-2 border-emerald-200 rounded-xl p-2
            outline-none transition-all duration-300 
            focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 
            placeholder:text-emerald-400 placeholder:text-lg
            text-emerald-800 text-lg"
        ></textarea>
        <button
          type="submit"
          className="self-end px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 
            text-white font-medium tracking-wider shadow-lg
            transition-all duration-300 hover:scale-105 hover:shadow-emerald-200
            active:scale-95 disabled:opacity-70"
        >
          投稿する
        </button>
      </form>
    </div>
  );
}

export default PostBox;
