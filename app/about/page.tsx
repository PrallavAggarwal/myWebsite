import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { Timeline } from "../components/timeline";

export default function About() {
  return (
    <div className="mx-auto mt-4 flex min-h-screen w-full items-start justify-start px-1 pt-4 md:px-10 md:pt-10">
      <Container className="flex h-full min-h-screen flex-col gap-2 md:grid md:grid-rows-[200px_1fr] md:pt-6">
        <div className="w-full">
          <Heading className="px-2">Prallav</Heading>
          <Subheading className="">
            I am a passionate software developer. I am building projects using
            fundamentals of computer science. I am a passionate software
            developer. I am building projects using I am a passionate software
            developer. I am building projects using fundamentals of computer
            science. fundamentals of computer science.
          </Subheading>
        </div>
        <Timeline />
      </Container>
    </div>
  );
}
