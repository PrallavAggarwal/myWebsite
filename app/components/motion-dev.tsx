"use client";
import { HTMLMotionProps, motion, MotionProps } from "motion/react";

export const Motion = ({ className, ...props }: HTMLMotionProps<"div">) => {
  return <motion.div {...props} className={`${className}`} />;
};
