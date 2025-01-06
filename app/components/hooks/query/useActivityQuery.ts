import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { getPostingAct } from "@/app/service/activity";
import { GetPostingActParams } from "@/app/types/posting-types";

// 활동 추천 공고 목록을 가져오는 hook
export const useActivityQuery = ({
  fieldIds,
  postingGubun,
  pageNum = 0,
}: GetPostingActParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ACTIVITY, fieldIds, postingGubun, pageNum], // 쿼리 키에 변수를 포함
    queryFn: () => getPostingAct({ fieldIds, postingGubun, pageNum }), // getPostingAct에 파라미터를 전달
  });
};
