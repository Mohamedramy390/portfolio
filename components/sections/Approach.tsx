"use client";

import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Approach() {
  return (
    <section className="py-24 md:py-32" id="approach">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Approach"
          title="How I Think About Engineering"
          description="Principles that guide my technical decisions."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.approach.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="h-full p-6 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
