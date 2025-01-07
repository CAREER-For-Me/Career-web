import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Header from "../../../components/firstQuestion/Header";


// id를 받고, id값에 따라 다른 페이지 보여주기
export default async function FirstQuestionPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  /*
    id값은 와이어프레임을 참고했습니다
    https://www.figma.com/design/ndyeLP1McNyIIqBAQAiFAy/%EC%BB%A4%EB%A6%AC%EC%96%B4%ED%8F%AC%EB%AF%B8?node-id=501-7760&t=GijAN761kPYBBMAM-0
  */
 
  if (id === "1-2")
  {
    return (
      <div>
        {/* appbar */}
        <Header/>

        {/* 두번째 선택지 (고려중인 진로가 있나요?) */}

        <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href = "/firstQuestion/" className = "flex flex-row">
            <img src="/images/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
            <p>이전으로</p>
          </Link>
        </div>
        <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
            간단한 조사를 진행할게요 ☺️ <br />
            <span className = "text-[1.2rem] font-bold">현재 고려중인 진로가 있나요?</span>
        </p>

        <div className = "flex gap-6">
                <Link href = "/firstQuestion/1-2" className = "flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[4rem] hover:bg-opacity-60">
                    <p className = "text-center">네, 있습니다!</p>
                    <Image src="/images/questionImage1.png" alt="img1" width={220} height={220} />
                </Link>
                <Link href = "/firstQuestion/1-6" className = "flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-opacity-60">
                    <p className = "text-center">아직 고민 중입니다!</p>
                    <Image src="/images/questionImage2.png" alt="img1" width={160} height={180} />
                </Link>
                <Link href = "/firstQuestion/1-6" className = "flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-opacity-60">
                    <p className = "text-center">일단 스펙부터<br/>갖추고 생각할게요.</p>
                    <Image src="/images/questionImage2.png" alt="img1" width={160} height={180} />
                </Link>
            </div>

      </div>
    );
  }
  else if (id === "1-3")
  {
    return (
      <div>
        Page 1-3
      </div>
    );
  }
  else if (id === "1-4")
  {
    return (
      <div>
        Page 1-4
      </div>
    );
  }
  else if (id === "1-51")
  {
    return (
      <div>
        Page 1-51
      </div>
    );
  }
  else if (id === "1-52")
  {
    return (
      <div>
        Page 1-52
      </div>
    );
  }
  else if (id === "1-6")
  {
    return (
      <div>
        Page 1-6
      </div>
    );
  }


  return <div>Page not found</div>



};

