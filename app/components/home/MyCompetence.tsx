"use client";

import SkillProgressCard from "../SkillProgressCard";
import { useSession } from "next-auth/react";
import EditSkills from "./EditSkills";
import JobSelectionCard from "./JobSelectionCard";

const MyCompetence = () => {
  const session = useSession();

  return (
    <section className="w-2/5 flex flex-col gap-2">
      {session.status == "unauthenticated" ? (
        <JobSelectionCard />
      ) : (
        <>
          <SkillProgressCard />
          <EditSkills />
        </>
      )}
    </section>
  );
};

export default MyCompetence;
