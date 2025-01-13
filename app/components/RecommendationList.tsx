// 추천 공고
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import axios from "axios";

interface RecommendationListProps {
  isHome: boolean;
}

const RecommendationList = ({ isHome }: RecommendationListProps) => {
  const [clipping, setClipping] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPostingMain = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/posting`
        );
        const postingList = response.data.main[0].postingList;

        setPosts(postingList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPostingMain();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center p-4">
        <span className="loading loading-spinner text-careerForMe-main"></span>
      </div>
    );
  const handleClipping = (title: string) => {};

  const limitedPosts = isHome ? posts?.slice(0, 8) : posts;

  return (
    <section>
      {posts ? (
        <ul className="flex flex-wrap -mx-2">
          {limitedPosts?.map((post, index) => (
            <li key={index} className="w-1/4 px-2 mb-4">
              {post && (
                <>
                  <div onClick={() => handleClipping(post.title)}>
                    {clipping[post.title] ? (
                      <>
                        <BsBookmarkFill className="relative left-[16rem] top-8 text-careerForMe-red text-lg" />
                      </>
                    ) : (
                      <div>
                        <BsBookmarkFill className="relative left-[16rem] top-8 text-gray-light text-lg" />
                      </div>
                    )}
                  </div>
                  <Link href={`activityRecommend/${post.title}`}>
                    <figure>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        width={300}
                        height={300}
                        className="rounded-3xl w-full"
                      />

                      <figcaption>
                        <p className="text-wrap w-full font-bold text-lg break-keep truncate mt-5">
                          {post.title}
                        </p>
                        <div>
                          <p>api 명세서에 없는 데이터</p>
                          <div className="flex gap-3 mb-7">
                            <p className="text-careerForMe-red font-bold">
                              D-1
                            </p>
                            <p className="text-gray-dark">조회 142</p>
                            <p className="text-gray-dark">댓글 2</p>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </section>
  );
};

export default RecommendationList;
