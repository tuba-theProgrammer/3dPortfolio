"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../_enums/hoc";

const ProjectStatistics: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // For intersection observer
  const target = 150;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // The percentage of the component's visibility before triggering the animation
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.ceil(start));
      }, 30);
    }
  }, [isVisible, target]);

  return (
    <>
      <div
        ref={ref} // Attach the ref to the component
        className="flex items-center gap-16 lg:gap-40 justify-center bg-tertiary rounded-lg h-full w-full p-5"
      >
      
        <div className="flex flex-col">
          <motion.div
            className="text-white font-bold text-[30px] lg:text-[50px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {count}+
          </motion.div>
          <div className="text-white font-bold text-[20px]">Projects</div>
        </div>
  
        <div className="flex flex-col gap-2">
        <div className="text-white font-roboto text-[15px] lg:text-[25px]">
          Successfully
        </div>
        <div className="text-white font-roboto text-[15px] lg:text-[25px]">
          delivered globally.
        </div>
        </div>

       
      </div>
    </>
  );
};

export default SectionWrapper(ProjectStatistics, "work");
