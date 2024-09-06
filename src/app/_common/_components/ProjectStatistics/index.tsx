"use client"
import React from "react";
import { SectionWrapper } from "../../_enums/hoc";
const ProjectStatistics: React.FC = () => {
  return (
    <>
     <div className="flex items-center justify-between bg-tertiary rounded-lg h-full w-full p-5 ">
     <div className="text-white font-semibold text-[35px]">
              Completed
          </div>
        <div className="flex flex-col">
          <div className="text-white font-bold text-[50px]">
              150+
          </div>
          <div className="text-white font-bold text-[20px]">
              Projects
          </div>

          </div>
          <div className="text-white font-semibold text-[35px]">
             Successfully
          </div>
     </div>
    </>
  );
};

export default SectionWrapper(ProjectStatistics, "work");
