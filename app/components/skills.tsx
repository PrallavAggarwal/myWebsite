"use client";
import { ReactIcon } from "@/public/techLogos/react";
import { SectionHeading } from "./sectionHeading";
import { Subheading } from "./subheading";
import { JsIcon } from "@/public/techLogos/js";
import { motion } from "motion/react";
import { TypescriptIcon } from "@/public/techLogos/typescript";
import { MongodbIcon } from "@/public/techLogos/mongodb";
import { Html } from "next/document";
import { HtmlIcon } from "@/public/techLogos/html";
import { CssIcon } from "@/public/techLogos/css";
import { TailwindIcon } from "@/public/techLogos/tailwind";
import { NodeIcon } from "@/public/techLogos/node";
import { ExpressIcon } from "@/public/techLogos/express";
import { SqlIcon } from "@/public/techLogos/sql";
import { Motion } from "./motion-dev";

export const Skills = ({ className }: { className: string }) => {
  return (
    <div className="shadow-insetShadow z-0 mx-auto h-full w-[calc(100%-43px)] max-w-4xl border-b border-neutral-200 py-2 md:w-full dark:border-b-neutral-700/50">
      <div className="px-3 py-4">
        <SectionHeading className="w-fit px-2" delay={0}>
          Skills
        </SectionHeading>
        <div className="flex flex-wrap items-center gap-4 py-4 md:flex md:flex-wrap md:justify-evenly">
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.02 }}
          >
            <JS />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.03 }}
          >
            <TS />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.04 }}
          >
            <ReactBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
          >
            <MongoDbBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.06 }}
          >
            <HtmlBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.07 }}
          >
            <CSSBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.08 }}
          >
            <TailwindBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.09 }}
          >
            <NodeJsBlock />
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
          >
            <ExpressBlock />
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >
            <SQLBlock />
          </Motion>
        </div>
      </div>
    </div>
  );
};

const JS = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-yellow-200 dark:shadow-yellow-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-yellow-50 dark:from-yellow-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <JsIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-yellow-200 dark:text-neutral-300 dark:drop-shadow-yellow-700/40">
        Javascript
      </div>
    </div>
  );
};

const TS = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-blue-200 dark:shadow-blue-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-blue-50 dark:from-blue-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-xl">
        <TypescriptIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-blue-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        TypeScript
      </div>
    </div>
  );
};

const ReactBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-blue-200 dark:shadow-blue-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-blue-50 dark:from-blue-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <ReactIcon className="" />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-blue-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        React
      </div>
    </div>
  );
};

const MongoDbBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-green-200 dark:shadow-green-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-green-50 dark:from-green-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <MongodbIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-green-200 dark:text-neutral-300 dark:drop-shadow-green-700/40">
        MongoDB
      </div>
    </div>
  );
};

const HtmlBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-orange-200 dark:shadow-orange-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-orange-50 dark:from-orange-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <HtmlIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-orange-200 dark:text-neutral-300 dark:drop-shadow-orange-700/40">
        HTML
      </div>
    </div>
  );
};

const CSSBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-blue-200 dark:shadow-blue-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-blue-50 dark:from-blue-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <CssIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-blue-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        CSS
      </div>
    </div>
  );
};

const TailwindBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-blue-200 dark:shadow-blue-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-blue-50 dark:from-blue-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <TailwindIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-blue-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        Tailwind
      </div>
    </div>
  );
};

const NodeJsBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-emerald-200 dark:shadow-emerald-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-emerald-50 dark:from-emerald-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <NodeIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-emerald-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        NodeJs
      </div>
    </div>
  );
};

const ExpressBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-slate-200 dark:shadow-slate-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-slate-50 dark:from-slate-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <ExpressIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-slate-200 dark:text-neutral-300 dark:drop-shadow-slate-700/40">
        ExpressJs
      </div>
    </div>
  );
};

const SQLBlock = () => {
  return (
    <div className="shadow-aceternityStandard relative flex items-center gap-1 rounded-full px-2 py-1 shadow-blue-200 dark:shadow-blue-700/40">
      <div className="absolute inset-0 z-0 animate-pulse rounded-full bg-linear-to-br from-blue-50 dark:from-blue-600/50 dark:to-transparent"></div>
      <div className="z-10 size-8 overflow-hidden rounded-2xl">
        <SqlIcon height={""} width={""} />
      </div>
      <div className="text-secondary z-10 font-extralight tracking-tight drop-shadow-lg drop-shadow-blue-200 dark:text-neutral-300 dark:drop-shadow-blue-700/40">
        SQL
      </div>
    </div>
  );
};
