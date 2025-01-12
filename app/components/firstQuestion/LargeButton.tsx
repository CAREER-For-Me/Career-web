import Link from "next/link";


{/* 세부 분야 선택 페이지 버튼 */}
export default function LargeButton({ url, text }: { url: string, text: string })
{
    return (
        <Link href = {url} className = "flex items-center justify-center w-[25rem] h-[12rem] text-careerForMe-main bg-white border-[1px] border-[rgb(109,114,255)] shadow-[0px_0px_5px_rgba(109,114,255,0.5)] rounded-lg">
            <p>{text}</p>
        </Link>
    );
}














