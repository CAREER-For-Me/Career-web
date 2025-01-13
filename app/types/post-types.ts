interface Post {
  title: string;
  imageUrl: string;
}

interface PostingList {
  postingList: Post[]; // 공고 리스트
}

interface PostDetail {
  title: string;
  corporateType: string;
  startAct: string;
  endAct: string;
  startDate: string;
  endDate: string;
  area: string;
  related: string;
  salary: string;
  homepageUrl: string;
  imageUrl: string;
  content: string;
}

interface PostingData {
  admin: Array<{
    fieldIds: number[];
    title: string;
    corporateType: string;
    postingGubun: string;
    startAct: string;
    endAct: string;
    startDate: string;
    endDate: string;
    area: string;
    related: string;
    salary: string;
    homepageUrl: string;
    imageUrl: string;
    content: string;
  }>;
  act: PostingList[];
  main: PostingList[];
  serch: PostingList[];
}
