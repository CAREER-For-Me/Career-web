"use client";

import SkillProgressCard from "../SkillProgressCard";
import { useSession } from "next-auth/react";
import EditSkills from "./EditSkills";
import JobSelectionCard from "./JobSelectionCard";
import { useEffect, useState } from "react";
import axios from "axios";

const MyCompetence = () => {
  const session = useSession();
  const [exp, setExp] = useState(null);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/exp`
        );
        setExp(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExp();
    console.log(exp);
  }, []);

  return (
    <section className="w-2/5 flex flex-col gap-2">
      {session.status == "unauthenticated" ? (
        <JobSelectionCard />
      ) : (
        <>
          <SkillProgressCard exp={exp} />
          <EditSkills exp={exp} />
        </>
      )}
    </section>
  );
};

export default MyCompetence;
