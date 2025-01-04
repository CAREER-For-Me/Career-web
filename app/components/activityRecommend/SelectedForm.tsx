"use clinet";

import axios from "axios";
import { useEffect, useState } from "react";

const SelectedForm = () => {
  const [fieldNames, setfieldNames] = useState([]);

  useEffect(() => {
    const fieldName = async () => {
      try {
        const res = await axios.get("http://localhost:4000/fieldName");
        setfieldNames(res);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  return (
    <form>
      <div className="rounded-[12px]  h-56 shadow-md p-4">
        <div className="flex mt-4 ml-3">
          <p className="mr-3 font-bold">직무</p>
          <select>
            <option value={1}>웹개발</option>
            <option value={2}>23</option>
            <option value={3}>23</option>
          </select>
          <select>
            <option value={1}>백엔드 개발자</option>
            <option value={2}>23</option>
            <option value={3}>23</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SelectedForm;
