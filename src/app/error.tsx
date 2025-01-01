"use client"; // Error boundaries must be Client Components

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>エラーが発生しました</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => redirect("/")
        }
      >
        ホームに戻る
      </button>
    </div>
  );
}
