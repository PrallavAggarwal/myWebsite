"use client";
import { motion } from "motion/react";

export const Subheading = ({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h2" | "h3" | "h4";
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.2,
      }}
      className="mx-auto w-4/5 md:w-full"
    >
      <Tag
        className={`text-secondary w-full px-1 pt-3 text-sm md:px-3 md:pt-4 md:text-sm ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
