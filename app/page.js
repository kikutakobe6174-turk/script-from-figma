"use client";

export default function Home() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/login`;
  };

  return (
    <div style={{ padding: 40 }}>
      <p className = "text-[40px]">Figma to Script</p>
      <h1>FigmaからJson形式の構造体で出します</h1>
      <button
       className = "bg-black text-white bg-primary text-on-primary px-30 py-6 rounded-lg font-body-md text-body-md font-bold transition-transform active:scale-95"
       onClick={handleLogin}>Figmaでログイン</button>
    </div>
  );
}