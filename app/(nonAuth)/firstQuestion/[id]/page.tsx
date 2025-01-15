import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/firstQuestion/Header";
import LargeButton from "../../../components/firstQuestion/LargeButton";
import SmallButton from "../../../components/firstQuestion/SmallButton";


// id를 받고, id값에 따라 다른 페이지 보여주기
export default async function FirstQuestionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  /*
    id값은 와이어프레임을 참고했습니다
    https://www.figma.com/design/ndyeLP1McNyIIqBAQAiFAy/%EC%BB%A4%EB%A6%AC%EC%96%B4%ED%8F%AC%EB%AF%B8?node-id=501-7760&t=GijAN761kPYBBMAM-0
  */

  if (id === "1-2") {
    return (
      <div>
        {/* appbar */}
        <Header />

        {/* 두번째 선택지 (고려중인 진로가 있나요?) */}
        <div className="text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href="/firstQuestion/" className="flex flex-row">
            <img
              src="/images/questionImages/questionImage3.png"
              alt="icon"
              className="h-[1.4em] w-[1.4em]"
            />
            <p>이전으로</p>
          </Link>
        </div>
        <p className="text-careerForMe-main leading-[2.5] my-[2rem]">
          간단한 조사를 진행할게요 ☺️ <br />
          <span className="text-[1.2rem] font-bold">
            현재 고려중인 진로가 있나요?
          </span>
        </p>

        <div className="flex gap-6">
          <Link
            href="/firstQuestion/1-3"
            className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[2rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
          >
            <p className="text-center">네, 있습니다!</p>
            <Image
              src="/images/questionImages/questionImage4.png"
              alt="img1"
              width={180}
              height={220}
            />
          </Link>
          <Link
            href="/firstQuestion/1-6"
            className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
          >
            <p className="text-center">아직 고민 중입니다!</p>
            <Image
              src="/images/questionImages/questionImage5.png"
              alt="img1"
              width={160}
              height={180}
              className="pt-[1rem]"
            />
          </Link>
          <Link
            href="/firstQuestion/1-6"
            className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
          >
            <p className="text-center">
              일단 스펙부터
              <br />
              갖추고 생각할게요.
            </p>
            <Image
              src="/images/questionImages/questionImage6.png"
              alt="img1"
              width={160}
              height={180}
            />
          </Link>
        </div>
      </div>
    );
  } else if (id === "1-3") {
    return (
      <div>
        {/* appbar */}
        <Header />

        {/* 세번째 선택지 (관심있는 직무를 선택해주세요?) */}
        <div className="text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href="/firstQuestion/1-2" className="flex flex-row">
            <img
              src="/images/questionImages/questionImage3.png"
              alt="icon"
              className="h-[1.4em] w-[1.4em]"
            />
            <p>이전으로</p>
          </Link>
        </div>
        <p className="text-careerForMe-main leading-[2.5] my-[2rem]">
          <span className="text-[1.2rem] font-bold">
            관심있는 직무를 선택해주세요
          </span>{" "}
          <br />
          나에게 맞는 공고를 추천해드릴게요!
        </p>
        <div className = "grid grid-cols-4 gap-6 max-w-[900px] ">
                <Link href = "/firstQuestion/1-4-programming" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">개발</p>
                    <Image src="/images/questionImages/questionImage7.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-management" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">기획</p>
                    <Image src="/images/questionImages/questionImage8.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-design" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[0.8rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">디자인</p>
                    <Image src="/images/questionImages/questionImage9.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-data" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[0.7rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">데이터</p>
                    <Image src="/images/questionImages/questionImage10.png" alt="img1" width={130} height={130} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-server" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">서버/보안</p>
                    <Image src="/images/questionImages/questionImage11.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-games" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">게임</p>
                    <Image src="/images/questionImages/questionImage12.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-QA" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[0.8rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">QA/테스트</p>
                    <Image src="/images/questionImages/questionImage13.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
                <Link href = "/firstQuestion/1-4-etc" className = "flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[0.5rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300">
                    <p className = "text-center">기타</p>
                    <Image src="/images/questionImages/questionImage14.png" alt="img1" width={120} height={120} className = "mt-[0.5rem]" />
                </Link>
            </div>

      </div>
    );
  }
  else if (id === "1-4-programming")
  {
    {/* 세부 분야 선택 페이지 - 개발 */}
    return (
      <div>
        <Header/>
        <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href = "/firstQuestion/1-3" className = "flex flex-row">
            <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
            <p>이전으로</p>
          </Link>
        </div>

        <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
            <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
            *희망 분야는 언제든지 변경할 수 있어요 :)
        </p>
        
        
        <div className = "flex flex-col items-center w-[80%] aspect-[6/1]">
          <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem] ">
            <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
            <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
          </div>


          <div className="grid grid-cols-3 items-center w-full h-16">
            <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
              <u>세부분야까지는 아직 정하지 않았어요</u>
            </p>

            <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
              다음으로
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
            </Link>
          </div>

        </div>

      </div >
    );
  }
  else if (id === "1-4-management")
    {
      {/* 세부 분야 선택 페이지 - 기획 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-[80%] aspect-[6/1]">
            <div className = "flex flex-col justify-center gap-5 mt-[3rem] mb-[5rem] ">
              <div className = "flex flex-row justify-center gap-6">
                <SmallButton url = "/firstQuestion/1-51" text = "UI 기획" />
                <SmallButton url = "/firstQuestion/1-51" text = "개발 매니저" />
                <SmallButton url = "/firstQuestion/1-51" text = "PL/PM/PO" />
                <SmallButton url = "/firstQuestion/1-51" text = "로그분석" />
              </div>
              <div className="flex flex-row justify-center gap-6">
                <SmallButton url = "/firstQuestion/1-51" text = "모바일기획" />
                <SmallButton url = "/firstQuestion/1-51" text = "사용자평가" />
                <SmallButton url = "/firstQuestion/1-51" text = "웹서비스 기획" />
                <SmallButton url = "/firstQuestion/1-51" text = "제안 및 컨설팅" />
              </div>
              <div className="flex flex-row justify-center gap-6">
                <SmallButton url = "/firstQuestion/1-51" text = "쇼핑몰 기획" />
                <SmallButton url = "/firstQuestion/1-51" text = "컨텐츠 기획" />
              </div>
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-4-design")
  {
    {/* 세부 분야 선택 페이지 - 디자인 */}
    return (
      <div>
        <Header/>
        <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href = "/firstQuestion/1-3" className = "flex flex-row">
            <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
            <p>이전으로</p>
          </Link>
        </div>

        <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
            <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
            *희망 분야는 언제든지 변경할 수 있어요 :)
        </p>
        
        
        <div className = "flex flex-col w-[80%] ">
          <div className = "flex flex-col justify-center gap-5 mt-[3rem] mb-[5rem] aspect-[6/1]">
            <div className = "flex flex-row justify-center gap-6 ">
              <SmallButton url = "/firstQuestion/1-51" text = "UI/UX 디자인" />
              <SmallButton url = "/firstQuestion/1-51" text = "웹 디자인" />
              <SmallButton url = "/firstQuestion/1-51" text = "모바일 디자인" />
              <SmallButton url = "/firstQuestion/1-51" text = "웹 퍼블리셔" />
            </div>
          </div>


          <div className="grid grid-cols-3 items-center w-full h-16">
            <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
              <u>세부분야까지는 아직 정하지 않았어요</u>
            </p>

            <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
              다음으로
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
            </Link>
          </div>

        </div>

      </div >
    );
  }
  else if (id === "1-4-data")
    {
      {/* 세부 분야 선택 페이지 - 개발 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-fit">
            <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem]">
              <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
              <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-4-server")
    {
      {/* 세부 분야 선택 페이지 - 개발 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-fit">
            <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem]">
              <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
              <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-4-games")
    {
      {/* 세부 분야 선택 페이지 - 개발 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-fit">
            <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem]">
              <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
              <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-4-QA")
    {
      {/* 세부 분야 선택 페이지 - 개발 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-fit">
            <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem]">
              <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
              <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-4-etc")
    {
      {/* 세부 분야 선택 페이지 - 개발 */}
      return (
        <div>
          <Header/>
          <div className = "text-[0.9rem] mt-[3.5rem] text-gray-400  ">
            <Link href = "/firstQuestion/1-3" className = "flex flex-row">
              <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em]" /> 
              <p>이전으로</p>
            </Link>
          </div>
  
          <p className = "text-careerForMe-main leading-[2.5] my-[2rem]">
              <span className = "text-[1.2rem] font-bold">세부 분야를 선택해주세요</span> <br />
              *희망 분야는 언제든지 변경할 수 있어요 :)
          </p>
          
          
          <div className = "flex flex-col w-fit">
            <div className = "flex flex-row gap-6 mt-[3rem] mb-[5rem]">
              <LargeButton url = "/firstQuestion/1-51" text = "DBA/데이터베이스" />
              <LargeButton url = "/firstQuestion/1-51" text = "빅데이터/AI" />
            </div>
  
  
            <div className="grid grid-cols-3 items-center w-full h-16">
              <p className="col-start-2 text-center text-[0.9rem] text-gray-300">
                <u>세부분야까지는 아직 정하지 않았어요</u>
              </p>
  
              <Link href = "/" className="flex flex-row text-careerForMe-main items-center justify-end text-careerForMe-main col-start-3">
                다음으로
                <img src="/images/questionImages/questionImage3.png" alt = "icon" className = "h-[1.4em] w-[1.4em] transform rotate-180" />
              </Link>
            </div>
  
          </div>
  
        </div >
      );
  }
  else if (id === "1-51")
  {
    return (
      <div>
        
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
        {/* appbar */}
        <Header />

        {/* 마지막 선택지 (희망 직무 선택 안함) */}
        <div className="text-[0.9rem] mt-[3.5rem] text-gray-400  ">
          <Link href="/firstQuestion/1-2" className="flex flex-row">
            <img
              src="/images/questionImages/questionImage3.png"
              alt="icon"
              className="h-[1.4em] w-[1.4em]"
            />
            <p>이전으로</p>
          </Link>
        </div>

        <div className="text-center leading-[2.2] mt-[12rem] mb-[3rem]">
          희망 직무를 선택하지 않으면 <br />
          <span className="text-careerForMe-main font-bold">
            맞춤형 포트폴리오 분석 서비스
          </span>
          를 제공해드릴 수 없어요. <br />
          분야만이라도 선택할까요?
        </div>

        <div className="flex flex-row items-center justify-center gap-5 text-[0.95rem]">
          <div className="flex justify-center items-center h-[3.3rem] w-[13rem] bg-[rgb(109,114,255)] text-white rounded-full border border-[rgb(109,114,255)] shadow-[0px_0px_5px_rgba(109,114,255,0.5)]">
            <Link href="/firstQuestion/1-2">다시 선택하기</Link>
          </div>

          <div className="flex justify-center items-center h-[3.3rem] w-[13rem] text-center bg-white text-[rgb(109,114,255)] rounded-full shadow-[0px_0px_5px_rgba(109,114,255,0.5)]">
            <Link href="/home">메인페이지로 이동하기</Link>
          </div>
        </div>
      </div>
    );
  }

  return <div>Page not found</div>;
}
