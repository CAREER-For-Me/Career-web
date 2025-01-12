import { jobSelectionStore } from "@/app/store/jobSelectionStore";

const DetailedJobSelection = () => {
  const { selectedJobs, removeJobPair } = jobSelectionStore();

  return (
    <section className="mt-8">
      {selectedJobs.length > 0 && (
        <div>
          {selectedJobs.map((jobPair, index) => (
            <div
              key={index}
              className="inline-flex border-[1px] rounded-full text-white bg-careerForMe-main w-auto px-6 py-2 text-nowrap mr-4 mb-4"
            >
              <p>{jobPair.job}</p>
              <p className="mx-2">{">"}</p>
              <p>{jobPair.detail}</p>
              <button className="ml-6" onClick={() => removeJobPair(index)}>
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DetailedJobSelection;
