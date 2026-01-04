import type { Metadata } from "next";
import { Container } from "../../components/container";
import { compileMDX } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/app/utils/mdx";
import { redirect } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) {
    return {
      title: "blog not Found",
    };
  }

  return {
    title: blog?.frontmatter.title,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);
  const singleBlog = await getSingleBlog(slug);
  console.log(singleBlog);

  if (!singleBlog) {
    redirect("/blog");
  }

  const { content, frontmatter } = singleBlog;
  return (
    <div className="mt-4 flex min-h-screen items-start justify-start p-4 md:p-10">
      <Container className="prose relative min-h-screen">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="my-10 max-h-96 w-full rounded-2xl border border-neutral-300 object-cover shadow-xl"
        />
        <div className="mx-auto">{content}</div>
      </Container>
    </div>
  );
}
