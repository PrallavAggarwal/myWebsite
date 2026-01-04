"use client";
import { motion } from "motion/react";

export const Heading = ({
  as: Tag = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
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
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2,
      }}
      className="w-fit px-7 md:px-0"
    >
      <Tag
        className={`text-primary mt-2 inline px-2 text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
