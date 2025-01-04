// 활동 추천 페이지
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SelectedForm from "@/app/components/activityRecommend/SelectedForm";
import Link from "next/link";

const ActivityRecommendationPage = () => {
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] = useState([]);

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
            })
          );
      } catch (error) {
        console.error(error, "에러가 발생했습니다.");
      }
    };
    getPostingList();
  }, []);

  return (
    <main>
      <SelectedForm />
      <hr />
      <section>
        <div>
          <p>
            나를 위한
            <select>
              <option>대외활동</option>
            </select>
            추천이에요🌟
          </p>
          <p>총 {posts.length}건</p>
        </div>
        <ul className="flex flex-row gap-4 flex-wrap">
          {posts.map((post, index) => (
            <li key={index}>
              <Link href="./">
                <figure>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className=" rounded-3xl"
                  />
                  <figcaption className="text-wrap w-80 font-bold text-lg">
                    {post.title}
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
