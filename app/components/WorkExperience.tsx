"use client";

import { motion } from "framer-motion";
import { Minus } from "lucide-react";
import Link from "next/link";

interface WorkExperience {
  company: string;
  companyUrl: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Tech Innovators Inc.",
    companyUrl: "https://techinnovators.com",
    position: "Senior Frontend Developer",
    duration: "Jan 2021 - Present",
    description:
      "Led the development of cutting-edge web applications using React and Next.js, improving overall site performance by 40%.",
  },
  {
    company: "Digital Solutions Ltd.",
    companyUrl: "https://digitalsolutions.com",
    position: "Full Stack Developer",
    duration: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained full-stack applications using Node.js and React, resulting in a 25% increase in user engagement.",
  },
  {
    company: "WebCraft Studios",
    companyUrl: "https://webcraftstudios.com",
    position: "Junior Web Developer",
    duration: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the creation of responsive websites and implemented SEO best practices, boosting client site traffic by an average of 30%.",
  },
];

export default function WorkExperience() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-primary">Work Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-xl font-medium text-primary">
                {exp.position}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
                {exp.duration}
              </p>
            </div>
            <Link
              href={exp.companyUrl}
              className="inline-block text-lg text-secondary-foreground mb-3 relative group"
            >
              {exp.company}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary-foreground transition-all group-hover:w-full"></span>
            </Link>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            {index < experiences.length - 1 && (
              <div className="pt-4">
                <Minus className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
