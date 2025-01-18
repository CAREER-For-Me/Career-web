interface JobListProps {
  categoryData?: { category: string; jobs: string[] }; // 선택된 카테고리 데이터
}

const JobList = ({ categoryData }: JobListProps) => {
  if (!categoryData) {
    return <p>카테고리 데이터를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="mb-32">
      <h2 className="text-2xl font-bold mb-6">{categoryData.category}</h2>
      <ul className="grid grid-cols-2 gap-4">
        {categoryData.jobs.map((job, index) => (
          <li
            key={index}
            className="flex items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[5rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
          >
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
