import type { Metadata } from "next";
import { Container } from "../components/container";
import { getBlogs } from "../utils/mdx";
import Link from "next/link";
import type { blogFrontmatter } from "../utils/types";
import { Heading } from "../components/heading";
import { Motion } from "../components/motion-dev";

export const metadata: Metadata = {
  title: "All blogs by Prallav Aggarwal",
  description: "All my thoughts and experience.",
};

export default async function Home() {
  const allblogs = await getBlogs();
  console.log("allblogs", allblogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="z-0 mt-4 flex min-h-screen w-full items-start justify-start px-1 pt-4 md:px-10 md:pt-10">
      <Container className="grid min-h-screen grid-rows-[80px_1fr] md:pt-6">
        <Heading className="px-2 py-4">All blogs</Heading>
        <div className="shadow-insetShadow mx-auto flex w-[calc(100%-0px)] flex-col gap-4 border-y border-neutral-200 px-2 py-10 dark:border-neutral-700/50">
          {allblogs.map((blog, index) => {
            return (
              <Motion
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                key={index}
                className="dark:hover:bg-subbackground border-b border-neutral-400 p-2 transition duration-200 ease-in-out hover:bg-neutral-200 dark:border-neutral-600/50"
              >
                <Link href={`/blog/${blog.slug}`} key={index} className="">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-primary text-base font-bold tracking-tight">
                      {blog.frontmatter?.title}
                    </div>
                    <div className="text-secondary text-sm tracking-tight">
                      {blog.frontmatter?.date}
                    </div>
                  </div>
                  <div className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                    {blog.frontmatter?.author}
                  </div>
                </Link>
              </Motion>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
