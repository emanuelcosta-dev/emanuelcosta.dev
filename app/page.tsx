import Section from "@/app/components/Section";
import Workplaces from "@/app/components/Workplaces";

import coremediaLogo from "@/public/jobs/coremedia.jpeg";
import optigestLogo from "@/public/jobs/optigest.jpeg";
import nemobileLogo from "@/public/jobs/nemobile.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1
            className="animate-in text-3xl font-semibold tracking-tight text-primary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Hi there, I&apos;m Emanuel!
          </h1>
        </div>
      </div>
      <Section heading="Work" headingAlignment="left">
        <div className="flex w-full flex-col gap-8">
          <p
            className="animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Experienced Full Stack Web Developer with a passion for creating
            dynamic and innovative solutions. With a passion for crafting
            dynamic web applications, I bring a wealth of expertise in
            integrating cutting-edge technologies and frameworks to create
            seamless user experiences.
          </p>
          <Workplaces items={workplaces} />
        </div>
      </Section>
    </div>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Coremedia",
    date: "2021 - Present",
    imageSrc: coremediaLogo,
    link: "https://coremedia.com/",
  },
  {
    title: "Full Stack Web Developer",
    company: "Optigest",
    date: "2020 - 2021",
    imageSrc: optigestLogo,
    link: "https://www.optigest.net/www/PT/",
  },
  {
    title: "Full Stack Web Developer",
    company: "Nemobile",
    date: "2020",
    imageSrc: nemobileLogo,
    link: "https://sidis.ai/",
  },
];
