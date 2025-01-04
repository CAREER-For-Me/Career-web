import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Header from "../../../components/firstQuestion/Header";


// id를 받고, id값에 따라 다른 페이지 보여주기
export default async function FirstQuestionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  /*
    id값은 와이어프레임을 참고했습니다
    https://www.figma.com/design/ndyeLP1McNyIIqBAQAiFAy/%EC%BB%A4%EB%A6%AC%EC%96%B4%ED%8F%AC%EB%AF%B8?node-id=501-7760&t=GijAN761kPYBBMAM-0
  */
 
  if (id === "1-2")
  {
    return (
      <div>
        Page 1-2
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

