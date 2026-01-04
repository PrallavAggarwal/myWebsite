import { Container } from "./components/container";
import { Heading } from "./components/heading";
import { LandingBlogs } from "./components/landingblogs";
import { Projects } from "./components/projects";
import { Scale } from "./components/scale";
import { Skills } from "./components/skills";
import { Subheading } from "./components/subheading";
import { projects } from "./data/projectData";

export default function Home() {
  return (
    <div className="bg-background mx-auto mt-4 flex min-h-screen w-full items-start justify-start pt-1 md:px-[40px] md:pt-10">
      <Container className="flex min-h-screen flex-col divide-neutral-950/5 pt-6 md:grid">
        <div className="z-10 mx-auto w-full max-w-4xl md:w-full">
          <Heading className="">Prallav</Heading>
          <Subheading className="pb-4">
            I am a passionate software developer. I am building projects using
            fundamentals of computer science.
          </Subheading>
        </div>
        <Projects projects={projects.slice(0, 3)} />
        <Skills className="" />
        <LandingBlogs className="" />
      </Container>
    </div>
  );
}
