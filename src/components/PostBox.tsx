import { createPost } from "@/actions/post";
import React from "react";

function PostBox() {
  return (
    <div>
      <form action={createPost} className="flex flex-col gap-2 mb-2">
        <textarea
          name="content"
          id="content"
          placeholder="あなたのdaily lifeは？"
          maxLength={100}
          required
          className="resize-none w-full h-40 border border-emerald-400 rounded-lg p-2 outline-none focus:ring-2 focus:ring-emerald-400"
        ></textarea>
        <button
          type="submit"
          className="self-end border-2 border-emerald-400 bg-emerald-600 text-white rounded-lg p-2 transform hover:scale-105 transition-transform duration-200"
        >
          投稿する
        </button>
      </form>
    </div>
  );
}

export default PostBox;
