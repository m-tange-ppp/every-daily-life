"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>エラーが発生しました</h2>
      <div style={{ margin: "20px 0" }}>
        <p>
          <strong>エラー内容:</strong> {error.message}
        </p>
        {error.digest && (
          <p>
            <strong>エラーID:</strong> {error.digest}
          </p>
        )}
        <p>
          <strong>スタックトレース:</strong>
        </p>
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "4px",
            whiteSpace: "pre-wrap",
          }}
        >
          {error.stack}
        </pre>
      </div>
      <button onClick={() => redirect("/")}>ホームに戻る</button>
    </div>
  );
}
