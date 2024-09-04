"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import React, { useCallback } from "react";

interface WorkExperience {
  company: string;
  companyUrl: string;
  position: string;
  duration: string;
  location: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Coremedia",
    companyUrl: "https://coremedia.com",
    position: "Full Stack Engineer",
    duration: "Sep 2021 - Present",
    location: "Porto, PT",
    description:
      "Led the development of cutting-edge web applications using React and Next.js, improving overall site performance by 40%.",
  },
  {
    company: "Optigest",
    companyUrl: "https://www.optigest.net/www/EN/",
    position: "Full Stack Web Developer",
    duration: "Dec 2020 - Sep 2021",
    location: "Porto, PT",
    description:
      "Developed and maintained full-stack applications using Node.js and React, resulting in a 25% increase in user engagement.",
  },
  {
    company: "Nemobile Applications",
    companyUrl: "https://sidis.ai/",
    position: "Full Stack Web Developer",
    duration: "Feb 2020 - Jul 2020",
    location: "Porto, PT",
    description:
      "Assisted in the creation of responsive websites and implemented SEO best practices, boosting client site traffic by an average of 30%.",
  },
];

export default function BentoWorkExperience() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-12">Work Experience</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index} exp={exp} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: WorkExperience;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="relative group bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]"
    >
      <div className="relative z-10">
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {exp.position}
            </h3>
            <Link
              href={exp.companyUrl}
              className="inline-block text-lg font-medium text-muted-foreground mb-3 relative group"
            >
              {exp.company}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <p className="text-secondary-foreground mb-4">{exp.description}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-4">
            <Calendar className="h-4 w-4 mr-2 text-primary/60" />
            <span>{exp.duration}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-2 text-primary/60" />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--muted-foreground) / 0.1),
              transparent 60%
            )
          `,
        }}
      />
    </motion.div>
  );
}
