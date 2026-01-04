import { getBlogs } from "../utils/mdx";
import Link from "next/link";
import { SectionHeading } from "./sectionHeading";
import { Subheading } from "./subheading";
import { Motion } from "./motion-dev";

export const LandingBlogs = async ({ className }: { className: string }) => {
  const allblogs = await getBlogs();
  console.log("allblogs", allblogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="shadow-insetShadow z-0 mx-auto h-full w-[calc(100%-43px)] max-w-4xl border-b border-neutral-200 px-3 md:w-full">
      <div className="w-4/5 px-3 pt-5 md:w-full">
        <SectionHeading className="w-fit" delay={0}>
          Writing my bugs experience, learnings and many more.
        </SectionHeading>
      </div>
      <div className={`${className} flex flex-col gap-2 py-3`}>
        {allblogs.map((blog, index) => {
          return (
            <Motion
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index + 0.05 }}
              key={index}
              className="border-b border-neutral-200 md:border-none dark:border-b-neutral-700/50"
            >
              <Link
                href={`/blog/${blog.slug}`}
                key={index}
                className="hover:bg-subbackground flex flex-col rounded-md pt-1 pb-2 transition duration-200 md:px-3"
              >
                <div className="flex w-full items-center justify-between">
                  <Subheading className="text-primary text-start text-sm font-bold tracking-tight md:text-base">
                    {blog.frontmatter?.title}
                  </Subheading>
                  <Subheading className="text-secondary text-end text-sm font-bold tracking-tight md:text-base">
                    {blog.frontmatter?.date}
                  </Subheading>
                </div>
                <Subheading className="text-secondary max-w-lg pt-2 text-start text-xs md:w-full md:text-sm">
                  {blog.frontmatter?.author}
                </Subheading>
              </Link>
            </Motion>
          );
        })}
      </div>
    </div>
  );
};
