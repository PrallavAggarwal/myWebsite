import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Frontmatter } from "./types";

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "/app/blogData", `${slug}.mdx`),
      "utf8",
    );

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "app/blogData"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getSingleBlogFrontMatter(slug);
      return {
        slug,
        frontmatter,
      };
    }),
  );

  return allBlogs;
};

const getSingleBlogFrontMatter = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "/app/blogData", `${slug}.mdx`),
      "utf8",
    );

    const { frontmatter } = await compileMDX<Frontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (error) {
    return null;
  }
};
