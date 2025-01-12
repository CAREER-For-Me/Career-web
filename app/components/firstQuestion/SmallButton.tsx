import Link from "next/link";


{/* 세부 분야 선택 페이지 버튼 #2 */}
export default function SmallButton({ url, text }: { url: string, text: string })
{
    {/* 작업해야 함 */}
    return (
        <Link href = {url} className = "flex items-center justify-center text-careerForMe-main bg-white border-[1px] border-[rgb(109,114,255)] shadow-[0px_0px_5px_rgba(109,114,255,0.5)] rounded-lg">
            <p>{text}</p>
        </Link>
    );
}


