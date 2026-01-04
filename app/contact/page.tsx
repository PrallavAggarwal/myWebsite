import { ContactForm } from "../components/contactForm";
import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { Timeline } from "../components/timeline";

export default function About() {
  return (
    <div className="mt-4 flex min-h-screen w-full items-start justify-start px-1.5 pt-4 md:px-10 md:pt-10">
      <Container className="grid h-full min-h-screen grid-rows-[auto_1fr] md:pt-6">
        <div>
          <Heading className="">Contact Me</Heading>
          <Subheading className="px-2 py-6">
            I am a passionate software developer. I am building projects using
            fundamentals of computer science. I am a passionate software
            developer. I am building projects using I am a passionate software
            developer. I am building projects using fundamentals of computer
            science. fundamentals of computer science. Hello 3
          </Subheading>
        </div>
        <ContactForm className="z-0 h-full flex-1" />
      </Container>
    </div>
  );
}
