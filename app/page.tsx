import Section from "@/app/components/Section";
import Workplaces from "@/app/components/Workplaces";
import Link from "@/app/components/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

import coremediaLogo from "@/public/jobs/coremedia.jpeg";
import optigestLogo from "@/public/jobs/optigest.jpeg";
import nemobileLogo from "@/public/jobs/nemobile.jpeg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <div className="">
          <h1 className="text-4xl font-bold leading-tight animate-in">
            Hey, I&apos;m Emanuel!
          </h1>
          <p
            className="max-w-lg animate-in text-muted-foreground pt-3"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I&apos;m a passionate Web Developer with a strong background in
            building web applications. I love everything tech, productivity and
            keyboards.
          </p>

          <p className="text-muted-foreground">
            Currently at <Link href="https://coremedia.com">Coremedia</Link>.
          </p>

          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/emanuelcosta-dev"
              className="inline-flex px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              Github
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </a>
            <a
              href="https://linkedin.com/in/emanuel-costa/"
              className="inline-flex px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              LinkedIn
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 md:gap-24 mt-24">
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p
              className="animate-in"
              style={{ "--index": 3 } as React.CSSProperties}
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
    </>
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
