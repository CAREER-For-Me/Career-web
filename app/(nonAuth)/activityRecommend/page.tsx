// 활동 추천 페이지
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SelectedForm from "@/app/components/activityRecommend/SelectedForm";

const ActivityRecommendationPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPostingList = async () => {
      try {
        const res = await axios.get("http://localhost:4000/postingList");
        setPosts(res.data);
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
            나를 위한 <select /> 추천이에요🌟
          </p>
          <p>총 {posts.length}건</p>
        </div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <figure>
                <img src={post.imageUrl} alt={post.title} />
                <figcaption>{post.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ActivityRecommendationPage;
