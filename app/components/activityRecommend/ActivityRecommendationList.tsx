// 추천 공고
"use client";

import Link from "next/link";
import { useActivityQuery } from "../hooks/query/useActivityQuery";
import { useState } from "react";
import { postingActivityStore } from "@/app/store/postingActivityStore";

const ActivityRecommendationList = () => {
  const postingGubun = postingActivityStore((state) => state.postingGubun);
  const [fieldIds, setFieldIds] = useState([1, 2]); // 예시 필드 ID
  const [pageNum, setPageNum] = useState(0); // 예시: 페이지 번호

  const {
    data: posts = [],
    isLoading,
    error,
  } = useActivityQuery({
    fieldIds,
    postingGubun,
    pageNum,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <section>
      <p className="py-4 text-gray-dark">총 {posts.length}건</p>
      <ul className="flex flex-wrap -mx-2">
        {posts.map((post, index) => (
          <li key={index} className="w-1/4 px-2 mb-4">
            {post && (
              <Link href={`activityRecommend/${post.title}`}>
                <figure>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="rounded-3xl w-full"
                  />
                  <figcaption>
                    <p className="text-wrap w-full font-bold text-lg break-keep truncate mt-5">
                      {post.title}
                    </p>
                    <p>주식회사 어치브모먼트</p>
                    <div className="flex gap-3 mb-7">
                      <p className="text-careerForMe-red font-bold">D-1</p>
                      <p className="text-gray-dark">조회 142</p>
                      <p className="text-gray-dark">댓글 2</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivityRecommendationList;
