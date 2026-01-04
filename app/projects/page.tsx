import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Projects } from "../components/projects";
import { SectionHeading } from "../components/sectionHeading";
import { Subheading } from "../components/subheading";
import { projects } from "../data/projectData";

export default function Home() {
  return (
    <div className="mt-4 flex min-h-screen w-full items-start justify-start px-2 pt-4 md:px-10 md:pt-10">
      <Container className="min-h-screen md:pt-6">
        <Heading className="">Projects</Heading>
        <Subheading className="pb-2">
          I am a passionate software developer. I am building projects using
          fundamentals of computer science.
        </Subheading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
