import BackButton from "@/app/components/question/BackButton";
import CareerChoiceYes from "@/app/components/question/CareerChoiceYes";
import CareerRecommendation from "@/app/components/question/CareerRecommendation";
import JobSelectionComplete from "@/app/components/question/JobSelectionComplete";
import JobSelectionSkipped from "@/app/components/question/JobSelectionSkipped";
import SelectedJob from "@/app/components/question/SelectedJob";

interface QuesionsPageProps {
  params: Promise<{ id: string }>;
}

const QuesionsPage = async ({ params }: QuesionsPageProps) => {
  const { id } = await params;

  if (id === "1") {
    return (
      <div>
        <BackButton />
        <CareerRecommendation />
      </div>
    );
  }

  if (id === "2") {
    return (
      <div>
        <BackButton />
        <CareerChoiceYes />
      </div>
    );
  }

  if (id === "3") {
    return (
      <div>
        <BackButton />
        <JobSelectionSkipped />
      </div>
    );
  }

  if (id === "4") {
    return (
      <div>
        <BackButton />
        <JobSelectionComplete />
      </div>
    );
  }
};

export default QuesionsPage;
