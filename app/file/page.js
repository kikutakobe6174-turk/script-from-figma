"use client";

import { useState } from "react";
import JsonViewer from "../component/JsonViewer"

export default function FilePage() {
  const [fileKey, setFileKey] = useState("");
  const [result, setResult] = useState(null);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/figma`

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("CLICKED");
    console.log(fileKey);
    const res = await fetch( url, {
      method: "POST",
      credentials: "include", // ←超重要（cookie送る）
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileKey }),
    });
    console.log("after fetch");

    const data = await res.json();
    
    console.log(process.env.NEXT_PUBLIC_API_URL);
    setResult(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Figmaファイル取得</h1>

      <input
        className = " bg-primary text-on-primary px-20 py-2 rounded-lg text-left font-bold transition-transform active:scale-95"
        value={fileKey}
        onChange={(e) => setFileKey(e.target.value)}
        placeholder="file key"
      />

      <button
       className = "bg-black text-white bg-primary text-on-primary px-6 py-2 rounded-lg font-body-md text-body-md font-bold transition-transform active:scale-95" 
       onClick={handleSubmit}
      >取得</button>

      {result && <JsonViewer data={result} />}
    </div>
  );
}