"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div 
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        delay: 0.1,
        duration: 0.7, 
      }}
    ></motion.div>
  )
}
