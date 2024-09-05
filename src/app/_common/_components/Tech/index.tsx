import React from "react";
import  BallCanvas  from "../../_enums/canvas/Ball"
import { technologies } from "../../_enums/Data/index";
import { SectionWrapper } from "../../_enums/hoc";

// Define the type for the technology object
interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
