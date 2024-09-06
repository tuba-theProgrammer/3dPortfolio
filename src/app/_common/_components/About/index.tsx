import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../_enums/style/styles";
import { services } from "../../_enums/Data/index";
import { SectionWrapper } from "../../_enums/hoc";
import { fadeIn, textVariant } from "../../_enums/utils/motion";

// Define the types for ServiceCard props
interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}
 
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-white text-[20px]  leading-[30px]'
      >
        Full Stack Developer with expertise in React , Node js, modern webtechnologies, and creating 3D animated websites. Proven
 ability to design and implement scalable, user-centric applications. Skilled in optimizing performance, API integration, and leading
 teamstodeliver high-quality projects. Passionate about problem-solving and continuous learning.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service:any, index:any) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
