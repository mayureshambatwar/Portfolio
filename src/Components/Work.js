import React from "react";
import { motion } from "framer-motion";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";

const Work = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden, moved down
    visible: { opacity: 1, y: 0 }, // Final state: visible, in place
  };

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkData.map((val, ind) => (
          <motion.div
            key={ind}
            className="work-card-wrapper"
            variants={cardVariants} // Use the defined variants
            initial="hidden" // Initial animation state
            animate="visible" // Final animation state
            transition={{ duration: 0.5, delay: ind * 0.2 }} // Staggered animation
          >
            <WorkCard
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
