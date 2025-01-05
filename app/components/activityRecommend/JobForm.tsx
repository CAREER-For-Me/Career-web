"use clinet";

import axios from "axios";
import { useEffect, useState } from "react";
import JobSelection from "./JobSelection";
import DetailedJobSelection from "./DetailedJobSelection";

const JobForm = () => {
  const [fieldNames, setfieldNames] = useState([]);

  useEffect(() => {
    const fieldName = async () => {
      try {
        const res = await axios.get("http://localhost:4000/field");
        setfieldNames(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fieldName();
  }, []);

  return (
    <form>
      <div className="rounded-[12px] shadow-[0_0px_12px_rgba(0,0,0,0.1)] p-4 pb-9 mt-7">
        <div className="flex flex-col mt-4 ml-3">
          <JobSelection />
          <DetailedJobSelection />
        </div>
      </div>
    </form>
  );
};

export default JobForm;
