import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Header from "../../components/firstQuestion/Header";


const FirstQuestion = () =>{
    return (
        <div>
            {/* appbar */}
            <Header/>

            {/* 첫번째 선택지 */}

            <p className = "text-careerForMe-main my-[3.5rem] leading-[2.5]">
                <b>커리어포미</b>에 오신 걸 환영해요 ☺️ <br />
                회원님의 진로 분야를 선택해주시면 <b>회원님께 꼭 맞는 맞춤형 활동</b>을 추천해드릴 수 있어요. <br />
                <span className = "text-xl font-bold">분야를 선택하시겠어요?</span>
            </p>

            <div className = "flex gap-6">
                <Link href = "/firstQuestion/1-2" className = "flex flex-col items-center justify-center text-white bg-[rgb(109,114,255)] rounded-2xl w-[28rem] h-[25rem] shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    <p className = "text-center">네, 선택하고 <b>맞춤 커리어</b> <br/> 추천 받고 싶어요!</p>
                    <Image src="/images/questionImage1.png" alt="img1" width={220} height={220} />
                </Link>
                <Link href = "/firstQuestion/1-6" className = "flex flex-col items-center justify-center text-white bg-[rgb(109,114,255)] rounded-2xl w-[28rem] h-[25rem] shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    <p className = "text-center">네, 선택하고 <b>맞춤 커리어</b> <br/> 추천 받고 싶어요!</p>
                    <Image src="/images/questionImage1.png" alt="img1" width={250} height={250} />
                </Link>
            </div>
            <Link href = "/firstQuestion/1-6">

            </Link>
            
        </div>
    );
};

export default FirstQuestion;
