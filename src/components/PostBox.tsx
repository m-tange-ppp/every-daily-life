import React from "react";

function PostBox() {
  return (
    <div>
      <form action="" className="flex flex-col gap-2 mb-2">
        <textarea
          name="daily-life"
          id="daily-life"
          placeholder="あなたのdaily lifeは？"
          maxLength={100}
          required
          className="resize-none w-full h-40 border-2 border-black rounded-lg p-2"
        ></textarea>
        <button
          type="submit"
          className="self-end border-2 border-black rounded-lg p-2 "
        >
          投稿する
        </button>
      </form>
    </div>
  );
}

export default PostBox;
