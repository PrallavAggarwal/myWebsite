"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Project } from "../utils/types";
import { SectionHeading } from "./sectionHeading";
import { ReactIcon } from "../../public/techLogos/react";
import { useRef, useState } from "react";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const [hover, setHover] = useState<null | number>(null);
  return (
    <div className="shadow-insetShadow z-10 mx-auto w-[calc(100%-43px)] border-y border-y-neutral-200 pt-2 pb-2 md:z-0 md:w-full md:px-2 dark:border-y-neutral-700/50">
      <SectionHeading className="ml-2 w-fit px-4" delay={0.01}>
        My projects.
      </SectionHeading>
      <div className="grid items-center justify-center gap-4 py-4 md:grid-cols-2">
        {projects.map((ele, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={index}
            className="group relative flex flex-col items-center justify-center rounded-lg py-2 transition duration-200 ease-in-out"
          >
            <AnimatePresence>
              {hover === index && (
                <motion.div
                  layoutId={`layout${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    boxShadow: "var(--shadow-aceternityDerek)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.02,
                  }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-subbackground absolute inset-0 -z-10 rounded-lg"
                ></motion.div>
              )}
            </AnimatePresence>
            <Image
              src={ele.image}
              alt={ele.title}
              height={200}
              width={200}
              className="z-10 h-60 w-[90%] rounded-xl object-cover transition duration-200"
            />
            <h2 className="text-primary z-20 mt-2 p-2 font-medium tracking-tight">
              {ele.title}
            </h2>
            <p className="text-secondary z-10 max-w-sm px-4 py-1 text-justify text-sm">
              {ele.summary}
            </p>
            <div className="relative flex h-10 w-full items-center justify-start gap-4 px-4">
              {ele.techStack.map((stack, index) => (
                <SectionHeading
                  className="flex w-fit items-center justify-center px-4"
                  delay={0}
                  key={index}
                >
                  {stack}
                </SectionHeading>
              ))}
              {/* <div className="absolute left-8 size-6 overflow-hidden rounded-full border border-neutral-300 bg-neutral-200"> */}
              {/*   <ReactIcon className="" /> */}
              {/* </div> */}
              {/* <div className="absolute left-12 size-6 overflow-hidden rounded-full border border-neutral-300 bg-neutral-200"> */}
              {/*   <ReactIcon className="" /> */}
              {/* </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
