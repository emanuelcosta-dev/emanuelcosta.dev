import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-start animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn&apos;t exist.
      </h1>
      <p className="mb-4 text-muted-foreground">
        If you expected to see something here, let me know (
        <Link
          href="mailto:hello@emanuelcosta.dev"
          className="text-muted-foreground underline font-bold hover:text-primary"
        >
          hello@emanuelcosta.dev
        </Link>
        ).
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-1 py-2 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      >
        Go Home
        <ArrowUpRightIcon className="h-4 w-4 ml-1" />
      </Link>
    </section>
  );
}
