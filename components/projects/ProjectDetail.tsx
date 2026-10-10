"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Server,
  Monitor,
  Database,
  Cloud,
  Brain,
} from "lucide-react";
import { Github } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stackIcons: Record<string, typeof Server> = {
  backend: Server,
  frontend: Monitor,
  database: Database,
  infrastructure: Cloud,
  ai: Brain,
};

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const statusConfig = {
    completed: {
      label: "Completed",
      className: "text-success border-success/20 bg-success/5",
    },
    "in-progress": {
      label: "In Progress",
      className: "text-warning border-warning/20 bg-warning/5",
    },
    mvp: {
      label: "MVP",
      className: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan-muted",
    },
  };

  const { label: statusLabel, className: statusClass } =
    statusConfig[project.status];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mb-8"
            id="back-to-projects"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-2.5 py-1 text-xs font-medium rounded-full border ${statusClass}`}
            >
              {statusLabel}
            </span>
            {project.achievement && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-warning border border-warning/20 bg-warning/5 rounded-full">
                <Trophy className="w-3 h-3" />
                {project.achievement}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">{project.category}</p>

          {/* Links */}
          <div className="flex gap-3 mt-6">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                id="project-github-link"
              >
                <Github className="w-4 h-4" />
                View Code
              </Button>
            )}
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                variant="primary"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                id="project-demo-link"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </motion.header>

        {/* Project Hero Banner / Image */}
        {project.images && project.images[0] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-bg-card shadow-2xl"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="mt-12 space-y-10">
          {/* Problem */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                The Problem
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </section>
          </ScrollReveal>

          {/* Role & Contributions */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                My Role: {project.role}
              </h2>
              <ul className="space-y-2">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="text-text-secondary flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {contribution}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* Architecture */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-cyan rounded-full" />
                Architecture
              </h2>
              <div className="p-5 rounded-xl border border-border bg-bg-card">
                <p className="text-text-secondary leading-relaxed text-sm">
                  {project.architecture}
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Technical Challenges */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Technical Challenges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={challenge}
                    className="p-4 rounded-lg border border-border bg-bg-card"
                  >
                    <span className="text-xs text-accent font-medium">
                      Challenge {i + 1}
                    </span>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-cyan rounded-full" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Technology Stack */}
          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                Technology Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(
                  Object.entries(project.stack) as [
                    string,
                    string[] | undefined,
                  ][]
                )
                  .filter(([, items]) => items && items.length > 0)
                  .map(([category, items]) => {
                    const Icon = stackIcons[category] || Server;
                    return (
                      <div
                        key={category}
                        className="p-4 rounded-lg border border-border bg-bg-card"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-4 h-4 text-accent" />
                          <span className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                            {category}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {items!.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs text-text-secondary bg-bg-primary border border-border rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </ScrollReveal>
        </div>

        {/* Bottom nav */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
            <Button href="/#contact" variant="primary" size="sm" id="project-contact-cta">
              Interested? Let&apos;s talk
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
