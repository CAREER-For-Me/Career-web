type JobCategoryData = {
  category: string;
  jobs: string[];
};

type JobDetails = {
  [category: string]: {
    icon: string;
    data: JobCategoryData[];
  };
};
