import { motion } from "framer-motion";
import React from "react";

const AnimatedImage = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="image-container"
    >
      <img src={src} alt={alt} className="animated-image" />
    </motion.div>
  );
};

export default AnimatedImage;



