import { QUERY_KEYS } from "./keys.constant";
import { getJobDetails, getPostingAct } from "@/app/service/activity";
import { GetPostingActParams } from "@/app/types/posting-types";
import { useQuery } from "@tanstack/react-query";

// 활동 추천 공고 목록 가져오기
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

// jobDetails 가져오기
export const useJobDetailsQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.JOB_DETAILS],
    queryFn: () => getJobDetails(),
  });
};
