"use client";
import { useRef, useEffect } from "react";
import { TimeLineData } from "../data/timelineData";
import { useInView, motion } from "motion/react";
import { Check } from "@/public/check";
import { SectionHeading } from "./sectionHeading";

export const Timeline = (props: {}) => {
  const data = TimeLineData;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  console.log(isInView);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="shadow-insetShadow z-0 mx-auto flex h-full w-[calc(100%-38px)] flex-col gap-4 border-t border-neutral-200 px-2 py-4 md:w-full dark:border-neutral-700/50"
    >
      <SectionHeading className="w-fit" delay={0}>
        Timeline
      </SectionHeading>
      {data.map((ele, index) => (
        <div key={index}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(5px)",
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : -10,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="shadow-customShadow3 text-primary mb-2 w-fit rounded-md px-2 py-0.5 font-bold"
          >
            {ele.year}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {ele.content.map((item, index) => {
              return (
                <div key={index} className="flex gap-2 px-2 text-neutral-600">
                  <Tick className="" index={index} />
                  <div className="flex flex-col">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.2 * index,
                      }}
                      className="flex gap-2"
                    >
                      {item.title}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.3 * index,
                      }}
                      className="text-neutral-400"
                    >
                      {item.content}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const Tick = ({ className, index }: { className: string; index: number }) => {
  return (
    <motion.div className="flex items-start gap-2">
      <Check className={`${className} size-4 text-neutral-400`} />
    </motion.div>
  );
};
