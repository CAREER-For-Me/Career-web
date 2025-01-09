import Image from "next/image";
import { BsBookmark } from "react-icons/bs";

const AtivityDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <section className="border shadow-lg rounded-2xl h-96">
        <div>
          <Image
            src="/images/공모전.png"
            alt="공모전 이미지"
            width={300}
            height={300}
          />
          <div className="bg-careerForMe-gray01">
            <BsBookmark />
          </div>
          <div>지원하기</div>
        </div>
      </section>
      <p>상세 내용</p>
      <section>
        이미지
        <article>
          <h1>📍지원자격</h1>
          <div>
            <p>이공계 대학생, 대학원생, LateX를 사용하는 연구원</p>
            <p>AI와 IT분야에 관심이 많은 분</p>
            <p>주기적인 콘텐츠 발행이 가능한 책임감 있는 분</p>
            <p>마케팅, 콘텐츠 제작에 관심이 많은 분</p>
          </div>
        </article>
        <article>
          <h1>📍활동내용</h1>
          <div>
            <p>
              <div className="border border-black bg-black rounded-full w-1 h-1" />
            </p>
            <p></p>
          </div>
        </article>
        <article>
          <h1>📍활동 혜택</h1>
          <div>
            <div className="border border-black bg-black rounded-full w-1 h-1" />
            <p>이공계 대학생, 대학원생, LateX를 사용하는 연구원</p>
            <p>AI와 IT분야에 관심이 많은 분</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AtivityDetailPage;
