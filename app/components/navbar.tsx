"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Container } from "./container";
import pfp from "../../public/luffy_face3.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
import { Scale } from "./scale";
import { ModeToggle } from "./toggleMode";
import { Threedots } from "@/public/threeDots";
import { Motion } from "./motion-dev";

export const Navbar = (props: {}) => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (ele) => {
    if (ele > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className="absolute w-screen">
      <div className="absolute inset-x-0 mx-auto flex h-screen w-screen max-w-4xl flex-col overflow-hidden md:mt-4 md:block md:w-full md:px-12">
        <motion.nav
          animate={{
            boxShadow:
              typeof window !== "undefined" &&
              window.innerWidth >= 768 &&
              scrolled
                ? "var(--shadow-aceternityDerek)"
                : "none",
            width:
              typeof window !== "undefined" &&
              window.innerWidth >= 768 &&
              scrolled &&
              scrolled
                ? "60%"
                : "100%",
            y:
              typeof window !== "undefined" &&
              window.innerWidth >= 768 &&
              scrolled &&
              scrolled
                ? 10
                : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="bg-background/10 fixed top-0 right-0 left-0 z-50 mx-auto flex items-center justify-between border border-neutral-200 px-4 py-2 backdrop-blur-xl md:sticky md:top-0 md:w-full md:rounded-2xl dark:border-neutral-50/10"
        >
          <Image
            className="size-10 cursor-pointer rounded-2xl border border-neutral-200"
            src={pfp}
            height={100}
            width={100}
            alt="pfp"
            loading="eager"
            onClick={() => redirect("/")}
          />
          <div className="flex items-center">
            <div className="relative flex size-8 items-center justify-center rounded-full">
              <ModeToggle className="" />
            </div>
            <div className="hidden md:flex">
              {navItems.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="relative px-2 py-1 text-sm"
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(null)}
                >
                  {hover === idx && (
                    <motion.span
                      layoutId="hovered-span"
                      className="absolute inset-0 z-0 h-full w-full rounded-md bg-neutral-200/60 dark:bg-neutral-700"
                    ></motion.span>
                  )}
                  <span className="relative z-10"> {item.title}</span>
                </Link>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
              <Threedots className="size-6" />
            </button>
          </div>
        </motion.nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{
                boxShadow: scrolled ? "var(--shadow-aceternityDerek)" : "none",
                y: scrolled ? 10 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              className="bg-background fixed top-0 left-0 z-50 mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-2 md:hidden"
            >
              <div onClick={() => setOpen(false)}>
                <Threedots className="size-6" />
              </div>
              <div className="text-secondary flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg px-4 py-2 text-sm md:hidden">
                {navItems.map((item, idx) => (
                  <Motion
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.3, delay: idx * 0.1 },
                    }}
                    key={idx}
                  >
                    <Link
                      href={item.href}
                      className="relative px-2 py-1 text-sm"
                      onClick={() => setOpen(!isOpen)}
                    >
                      <span className="relative z-10"> {item.title}</span>
                    </Link>
                  </Motion>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};
