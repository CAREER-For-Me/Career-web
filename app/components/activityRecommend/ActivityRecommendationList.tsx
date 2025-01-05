// 추천 공고
"use client";

import { Posting } from "@/app/types/posting-types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActivityRecommendationList = () => {
  const [posting, setPosting] = useState<Posting[]>([]);
  const [selected, setSelected] = useState("activity");

  useEffect(() => {
    const getPostingList = async () => {
      try {
        const res = await axios.get("http://localhost:4000/postings");

        setPosting(res.data);
        console.log(res);
      } catch (error) {
        console.error(error, "에러가 발생했습니다.");
      }
    };
    getPostingList();
  }, []);

  return (
    <section>
      <p className="py-4 text-gray-dark">총 {posting.length}건</p>
      <ul className="flex flex-wrap -mx-2">
        {posting.map((post, index) => (
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
