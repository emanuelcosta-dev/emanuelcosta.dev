import Link from "@/app/components/Link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="mt-16 animate-in"
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="flex flex-col space-y-4">
        <a
          href="https://github.com/emanuelcosta-dev"
          target="_blank"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <FaGithub className="w-6 h-6" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/emanuel-costa/"
          target="_blank"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:hello@emanuelcosta.dev"
          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>hello@emanuelcosta.dev</span>
        </a>
      </div>
    </section>
  );
}
