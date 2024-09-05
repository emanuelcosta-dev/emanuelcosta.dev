import BentoWorkExperience from "@/app/components/BentoWorkExperience";
import Contact from "@/app/components/Contact";
import Link from "@/app/components/Link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-24">
        <div
          className="animate-in relative"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <div className="flex flex-col pr-24">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Hey, I&apos;m Emanuel!
            </h1>
            <p className="max-w-lg text-muted-foreground">
              I&apos;m a passionate Web Developer with a strong background in
              building web applications. I love everything tech, productivity
              and keyboards.
            </p>
          </div>
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 absolute top-2 right-0 z-0">
            <AvatarImage
              src="https://github.com/emanuelcosta-dev.png"
              alt="@emanuelcosta-dev"
            />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>

          <p className="text-muted-foreground mt-4">
            Currently at{" "}
            <a
              href="https://coremedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary border-b-2 border-current pb-0.5 hover:border-primary transition-colors"
            >
              Coremedia
            </a>
            .
          </p>

          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/emanuelcosta-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 py-2 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              Github
              <ArrowUpRightIcon className="h-4 w-4 ml-1" />
            </a>
            <a
              href="https://linkedin.com/in/emanuel-costa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 py-2 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            >
              LinkedIn
              <ArrowUpRightIcon className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 md:gap-24 mt-24">
        <BentoWorkExperience />
      </div>
      <Contact />
    </>
  );
}
