"use client";

import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Trophy, Award, Users, Code2 } from "lucide-react";

const achievementIcons: Record<string, typeof Trophy> = {
  "University Competition": Trophy,
  "Academic Recognition": Award,
  Teaching: Users,
  "Competitive Programming": Code2,
};

export function Achievements() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary" id="achievements">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Achievements"
          title="Recognition"
          description="Verified achievements and notable accomplishments."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {achievements.map((achievement, i) => {
            const Icon = achievementIcons[achievement.context] || Award;

            return (
              <ScrollReveal key={achievement.title} delay={i * 0.1}>
                <div className="h-full p-5 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-warning/5 border border-warning/10 group-hover:border-warning/20 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <span className="text-xs text-text-tertiary uppercase tracking-wider">
                        {achievement.context}
                      </span>
                      <h3 className="text-base font-semibold text-text-primary mt-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                        {achievement.description}
                      </p>
                      {achievement.project && (
                        <p className="text-xs text-accent mt-2 font-medium">
                          Project: {achievement.project}
                        </p>
                      )}
                    </div>
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
