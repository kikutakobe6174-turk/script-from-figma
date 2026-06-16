import { React } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FileUsage(){
    return(
    <div style={{ padding: 40 }}>
        <h1>Figmaキーの取り方</h1>
        <h2>1.ブラウザの場合</h2>
        <p>URLの /file/ と /File-name の間にある ABCDEFG12345 がファイルキーです</p>
        <Image
         src="/filekey_browser.svg"
         alt="ファイルキー取得方法"
         width={500}
         height={125}
        />
        <h2>2.アプリ版の場合</h2>
        <p>右上の 共有 のボタンを押すと,右上に リンクをコピー というボタンが出てきます</p>
        <Image
         src="/filekey_application.svg"
         alt="ファイルキー取得方法"
         width={500}
         height={125}
        />
        <Link href="/file" className="underline">← ファイル取得ページへ戻る</Link>
    </div>
    )
}