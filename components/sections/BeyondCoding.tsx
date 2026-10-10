"use client";

import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, Activity, Sparkles } from "lucide-react";

const icons = [BookOpen, Activity, Sparkles];

export function BeyondCoding() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary" id="beyond-coding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Beyond Coding"
          title="Outside the IDE"
          description="Interests that complement my engineering work."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {profile.beyondCoding.map((item, i) => {
            const Icon = icons[i] || Sparkles;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="h-full p-5 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors">
                  <Icon className="w-5 h-5 text-accent-cyan mb-3" />
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
