
import { motion } from "framer-motion";
import React from "react";
import image1 from "../assets/images/tina.jpg"


const AnimatedImage = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="image-container"
    >
      <img src={image1} alt={alt} className="animated-image" />
    </motion.div>
  );
};

export default AnimatedImage;


