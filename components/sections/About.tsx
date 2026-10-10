import Image from "next/image";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Shield, Code2, BookOpen, MapPin } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Engineering",
      description:
        "APIs, databases, authentication, and server-side architecture",
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description:
        "Security-first approach from CNC specialization at E-JUST",
    },
    {
      icon: GraduationCap,
      title: "CS at E-JUST",
      description: `${education.degree}, graduating ${education.expectedGraduation}`,
    },
    {
      icon: BookOpen,
      title: "Teaching Experience",
      description:
        "Taught programming to 100+ students across multiple courses",
    },
  ];

  return (
    <section className="py-24 md:py-32" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="About"
          title="Background & Focus"
          description="A backend-focused software engineer with a cybersecurity foundation."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text content — 7 cols */}
          <div className="lg:col-span-7 space-y-5">
            {profile.about.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Profile Card & Highlights — 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="right">
              <div className="p-5 rounded-2xl border border-border bg-bg-card relative overflow-hidden group hover:border-accent/30 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative w-32 h-36 rounded-2xl overflow-hidden shrink-0 border border-border-hover shadow-lg">
                    <Image
                      src="/profile.jpg"
                      alt={profile.name}
                      fill
                      sizes="128px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-text-primary">
                      {profile.name}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-0.5">
                      {profile.title}
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-md border border-border">
                        <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                        {profile.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-md border border-border">
                        <Shield className="w-3.5 h-3.5 text-accent" />
                        Cyber Security (CNC)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 + i * 0.05} direction="right">
                  <div className="p-3.5 rounded-xl border border-border bg-bg-card hover:border-border-hover transition-colors h-full">
                    <item.icon className="w-4 h-4 text-accent mb-2" />
                    <h4 className="text-xs font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-text-secondary leading-snug">
                      {item.description}
                    </p>
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

