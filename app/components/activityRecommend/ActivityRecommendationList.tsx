// 추천 공고
"use client";

import Link from "next/link";
import { useActivityQuery } from "../hooks/query/useActivityQuery";
import { useState } from "react";
import { postingActivityStore } from "@/app/store/postingActivityStore";

const ActivityRecommendationList = () => {
  const postingGubun = postingActivityStore((state) => state.postingGubun);
  const [fieldIds, setFieldIds] = useState([1, 2]); // 임시
  const [pageNum, setPageNum] = useState(0); // 임시

  const {
    data: posts = [],
    isLoading,
    error,
  } = useActivityQuery({
    fieldIds,
    postingGubun,
    pageNum,
  });

  if (isLoading)
    return (
      <div className="flex justify-center p-4">
        <span className="loading loading-spinner text-careerForMe-main"></span>
      </div>
    );
  if (error)
    return (
      <div role="alert" className="alert alert-error mt-4 text-white font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>에러 발생! {error.message}</span>
      </div>
    );

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
