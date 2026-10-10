"use client";

import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Server,
  Database,
  Monitor,
  Brain,
  Code2,
  Wrench,
  Shield,
} from "lucide-react";

const categoryIcons: Record<string, typeof Server> = {
  "Backend Development": Server,
  "Databases & Data": Database,
  "Frontend Development": Monitor,
  "AI Integration": Brain,
  "Programming Languages": Code2,
  "Tools & Infrastructure": Wrench,
  "Cybersecurity & Networks": Shield,
};

export function Skills() {
  return (
    <section className="py-24 md:py-32" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="Technical Skills"
          description="Technologies and tools I work with, organized by domain."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.title] || Code2;

            return (
              <ScrollReveal key={category.title} delay={i * 0.05}>
                <div className="h-full p-5 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 group-hover:border-accent/20 transition-colors">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs text-text-secondary bg-bg-primary border border-border rounded-md hover:border-border-hover hover:text-text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
