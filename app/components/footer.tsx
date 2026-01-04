import Link from "next/link";
import { X_logo_1, X_logo_2 } from "@/public/X";
import github from "../../public/github.svg";
import { LinkedIn } from "@/public/linkedIn";
import { Github } from "@/public/Github";
import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="z-0 mt-0! md:px-10">
      <div className="shadow-insetShadow z-0 mx-auto flex w-[calc(100%-50px)] max-w-4xl items-center justify-between border-x border-t border-neutral-200 px-2 py-3 md:w-full dark:border-neutral-700/50 dark:border-t-neutral-700/50">
        <p className="text-secondary py-3 text-center font-extralight">
          Built with love
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
          <Link
            href={"https://github.com/PrallavAggarwal"}
            className="rounded-md transition duration-200 hover:fill-neutral-700 dark:fill-neutral-700 dark:hover:fill-neutral-500"
          >
            <div>
              <Github className="size-7" />
            </div>{" "}
          </Link>
          <Link
            href={"https://www.linkedin.com/in/prallav-aggarwal-8a5168221/"}
            className="hover:fill-neutral-700 dark:fill-neutral-700 dark:hover:fill-neutral-500"
          >
            <div>
              <LinkedIn className="size-7" />
            </div>
          </Link>
          <Link
            href={"https://x.com/prallavagg002"}
            className="hover:fill-neutral-700 dark:fill-neutral-700 dark:hover:fill-neutral-500"
          >
            <div>
              <X_logo_2 className="size-7" />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};
