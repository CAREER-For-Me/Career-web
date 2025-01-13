import { GetPostingActParams, Posts } from "../types/posting-types";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 세부 분야 선택 (POST 요청)
export const addActField = async (fieldName: string[]) => {
  const response = await fetch(`${baseURL}/fields`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.JWT_TOKEN}`,
    },
    body: JSON.stringify({ fieldName }),
  });
  const data = await response.json();

  return data;
};

// 활동 추천 페이지 공고 목록 조회 (GET 요청)
export const getPostingAct = async ({
  fieldIds,
  postingGubun,
  pageNum = 0,
}: GetPostingActParams) => {
  const queryParams = new URLSearchParams({
    fieldIds: JSON.stringify(fieldIds), // 배열을 문자열로 변환하여 전달
    postingGubun: postingGubun.toString(),
    pageNum: pageNum.toString(),
  }).toString();

  const response = await fetch(`${baseURL}/postings?${queryParams}`, {
    cache: "no-cache",
  });
  const data = await response.json();

  return data as Posts[]; // 반환 타입을 Post 배열로
};

// 활동 공고 상세 조회 (GET 요청)
export const getSingleAct = async (postingId: string) => {
  const response = await fetch(`${baseURL}/${postingId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.JWT_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

// jobDetails 가져오기
export const getJobDetails = async () => {
  const response = await fetch(`${baseURL}/jobDetails`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.JWT_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};
