import Link from "next/link";


{/* 세부 분야 선택 페이지 버튼 #2 */}
export default function SmallButton({ url, text }: { url: string, text: string })
{
    {/* 작업해야 함 */}
    return (
        <div className = "flex items-center justify-center transition duration-300 hover:bg-[rgb(109,114,255)] hover:text-white text-careerForMe-main px-[1rem] py-[0.5rem] bg-white border-[1px] border-[rgba(109,114,255,0.5)] shadow-[0px_0px_5px_rgba(109,114,255,0.5)] rounded-full">
            <p>{text}</p>
        </div>
    );
}


