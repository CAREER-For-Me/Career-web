export interface Posts {
  id: string;
  title: string;
  corporateType: string;
  startAct: string;
  endAct: string;
  startDate: string;
  area: string;
  related: string;
  salary: string;
  homepageUrl: string;
  imageUrl: string;
  content: string;
}
export interface GetPostingActParams {
  fieldIds: number[];
  postingGubun: number;
  pageNum?: number;
}
