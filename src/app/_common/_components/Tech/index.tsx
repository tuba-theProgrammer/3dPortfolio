import React from "react";
import { technologies } from "../../_enums/Data/index";
import { SectionWrapper } from "../../_enums/hoc";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn} from "../../_enums/utils/motion";

// Define the type for the technology object
interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: Technology,index) => (
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            perspective={1000}
            scale={1}
          >
        <div className="w-28 h-28 bg-tertiary rounded-[25px]" key={technology.name}>
          <img alt="tech" src={technology.icon} />
        </div>
        </Tilt>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
