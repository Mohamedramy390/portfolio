"use client";

import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase, Users } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Experience"
          title="Experience & Teaching"
          description="Professional teaching experience and technical instruction."
        />

        <div className="mt-12 max-w-3xl">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <ScrollReveal key={exp.title + exp.organization} delay={i * 0.1}>
                  <div className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-[10px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-bg-primary z-10" />

                    {/* Content */}
                    <div className="pb-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-text-tertiary whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        {exp.type === "teaching" ? (
                          <Users className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <Briefcase className="w-3.5 h-3.5 text-accent" />
                        )}
                        <span className="text-sm text-text-secondary">
                          {exp.organization}
                        </span>
                        {exp.context && (
                          <span className="text-xs text-text-tertiary">
                            · {exp.context}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            className="text-sm text-text-secondary flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {exp.impact && (
                        <p className="mt-3 text-sm font-medium text-accent">
                          {exp.impact}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
