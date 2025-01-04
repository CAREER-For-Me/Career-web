// 활동 추천 페이지
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SelectedForm from "@/app/components/activityRecommend/SelectedForm";
import Link from "next/link";
import Image from "next/image";

const ActivityRecommendationPage = () => {
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] = useState([]);
  const [seleted, setSeleted] = useState(null);

  useEffect(() => {
    const getPostingList = async () => {
      try {
        await axios
          .all([
            axios.get("http://localhost:4000/postingList"),
            axios.get("http://localhost:4000/detail"),
          ])
          .then(
            axios.spread((res1, res2) => {
              setPosts(res1.data);
              setPostDetail(res2.data);
              console.log(res1);
              console.log(res2);
            })
          );
      } catch (error) {
        console.error(error, "에러가 발생했습니다.");
      }
    };
    getPostingList();
  }, []);

  return (
    <main className="mt-16">
      <div className="flex">
        <Image
          src="/images/bell.png"
          alt="search"
          width={60}
          height={60}
          className="mr-4"
        />
        <div>
          <p className="font-bold text-xl">
            <b className="text-careerForMe-main">사이드나우님</b>을 위한 추천
            공고🌟
          </p>
          <p className="font-thin text-gray-dark text-sm">
            최근 업데이트 순으로 노출돼요.
          </p>
        </div>
      </div>

      <SelectedForm />

      <div className="border-y-[0.1px] my-9 border-gray-dark"></div>
      <section>
        <div>
          <p>
            나를 위한
            <select className="bodered border-x-gray-medium">
              <option>대외활동</option>
            </select>
            추천이에요🌟
          </p>
          <p>총 {posts.length}건</p>
        </div>
        <ul className="flex flex-row gap-4 flex-wrap  gap-y-16">
          {posts.map((post, index) => (
            <li key={index}>
              <Link href={`activityRecommend/${postDetail.title}`}>
                <figure>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className=" rounded-3xl"
                  />
                  <figcaption>
                    <p className="text-wrap w-80 font-bold text-lg break-keep truncate">
                      {post.title}
                    </p>
                    <p>주식회사 어치브모먼트</p>
                    <div className="flex gap-3">
                      <p className="text-careerForMe-red font-bold">D-1</p>
                      <p className="text-gray-dark">조회 142</p>
                      <p className="text-gray-dark">댓글 2</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ActivityRecommendationPage;
