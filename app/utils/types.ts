export type Frontmatter = {
  title: string;
  author?: string;
  date?: string;
  image?: string;
  description?: string;
};

export type blogFrontmatter = {
  slug: string;
  frontmatter: Frontmatter;
};

export type TimeLineDataType = {
  year: string;
  content: {
    title: string;
    description: string;
  };
};

export type Project = {
  title: string;
  summary: string;
  link: string;
  image: string;
  authorBio: string;
  techStack: string[];
};
