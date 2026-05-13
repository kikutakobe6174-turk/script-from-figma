"use client";

import { useState } from "react";

export default function JsonViewer({ data }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(data, null, 2)
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      style={{
        position: "relative",
        background: "#f5f5f5",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "24px",
      }}
    >
      {/* コピー按钮 */}
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          cursor: "pointer",
        }}
      >
        {copied ? "✓" : "📋"}
      </button>

      {/* JSON表示 */}
      <pre
        style={{
          overflowX: "auto",
          fontSize: "16px",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}