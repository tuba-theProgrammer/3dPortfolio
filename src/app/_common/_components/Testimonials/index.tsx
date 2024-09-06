import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../_enums/style/styles";
import { testimonials } from "../../_enums/Data/index";
import { SectionWrapper } from "../../_enums/hoc";
import { fadeIn, textVariant } from "../../_enums/utils/motion";

// Define types for FeedbackCard props
interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
}

// Define the FeedbackCard component
const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-white text-[14px]">
            {designation} {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Define the type for testimonials data
interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
}

const Feedbacks: React.FC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div
          variants={textVariant()}
          className="flex flex-col gap-5 lg:flex-row justify-between"
        >
          <div className="flex flex-col">
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </div>
          <p className="text-lg text-white">
            Want to see more reviews?{" "}
            <a
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300 ease-in-out"
              href="https://www.fiverr.com/tubaasif535"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
            .
          </p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");