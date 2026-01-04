"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export const SectionHeading = ({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className: string;
  delay: number;
}) => {
  return (
    <h2
      className={`text-secondary relative flex w-4/5 max-w-lg flex-wrap py-1 text-xs font-normal md:w-fit md:flex-none md:px-1 md:text-xs ${className}`}
    >
      <Background />
      {children.split(" ").map((word, index) => (
        <motion.span
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
          viewport={{
            once: false,
          }}
          key={index}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="border-bordercolor absolute inset-0 h-full w-full scale-[1.04] animate-pulse border border-dashed bg-neutral-100 dark:bg-neutral-700"
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-[1px] bg-neutral-400"></div>
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-[1px] bg-neutral-400"></div>
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-[1px] bg-neutral-400"></div>
      <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-[1px] bg-neutral-400"></div>
    </motion.div>
  );
};
