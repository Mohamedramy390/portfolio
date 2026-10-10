"use client";

import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Shield, Calendar, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 md:py-32" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Education" title="Academic Background" />

        <div className="mt-12 max-w-3xl">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/5 border border-accent/10 shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {education.institution}
                    </h3>
                    <p className="text-text-secondary mt-1">
                      {education.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-accent" />
                      {education.specialization}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-text-tertiary" />
                      Expected {education.expectedGraduation}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-text-tertiary" />
                      <span className="text-sm font-medium text-text-primary">
                        Relevant Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs text-text-secondary bg-bg-primary border border-border rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
