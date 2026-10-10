import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    completed: { label: "Completed", className: "text-success border-success/20 bg-success/5" },
    "in-progress": { label: "In Progress", className: "text-warning border-warning/20 bg-warning/5" },
    mvp: { label: "MVP", className: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan-muted" },
  };

  const { label, className } = config[status];

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${className}`}>
      {label}
    </span>
  );
}

function StackGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="text-xs text-text-tertiary uppercase tracking-wider">
        {label}
      </span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 text-xs text-text-secondary bg-bg-primary border border-border rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <ScrollReveal>
      <div className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-all duration-300 flex flex-col h-full">
        {/* Project Image Preview */}
        {project.images && project.images[0] && (
          <Link
            href={`/projects/${project.slug}`}
            className="block relative w-full aspect-[16/9] overflow-hidden border-b border-border bg-bg-secondary group/img"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-medium bg-bg-card/90 backdrop-blur-sm border border-border text-text-secondary opacity-0 group-hover/img:opacity-100 transition-opacity">
              View Case Study →
            </div>
          </Link>
        )}

        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <StatusBadge status={project.status} />
                {project.achievement && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-warning border border-warning/20 bg-warning/5 rounded-full">
                    <Trophy className="w-3 h-3" />
                    Award
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-tertiary mt-1">
                {project.category}
              </p>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-border-hover hover:bg-bg-card-hover transition-colors text-text-secondary hover:text-text-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-border-hover hover:bg-bg-card-hover transition-colors text-text-secondary hover:text-text-primary"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          {project.achievement && (
            <p className="mt-3 text-sm text-warning font-medium">
              {project.achievement}
            </p>
          )}

          {/* Key features */}
          <div className="mt-5">
            <h4 className="text-xs text-text-tertiary uppercase tracking-wider mb-2">
              Key Implementation Areas
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.features.slice(0, 6).map((feature) => (
                <li
                  key={feature}
                  className="text-xs text-text-secondary flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mt-5 space-y-3">
            {project.stack.backend && (
              <StackGroup label="Backend" items={project.stack.backend} />
            )}
            {project.stack.frontend && (
              <StackGroup label="Frontend" items={project.stack.frontend} />
            )}
            {project.stack.database && (
              <StackGroup label="Database" items={project.stack.database} />
            )}
            {project.stack.ai && (
              <StackGroup label="AI" items={project.stack.ai} />
            )}
            {project.stack.infrastructure && (
              <StackGroup
                label="Infrastructure"
                items={project.stack.infrastructure}
              />
            )}
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-between gap-3 pt-2">
            <Button
              href={`/projects/${project.slug}`}
              variant="ghost"
              size="sm"
              id={`project-detail-${project.slug}`}
            >
              View Case Study
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/25 rounded-lg hover:bg-accent/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <ScrollReveal>
      <div className="group h-full rounded-xl border border-border bg-bg-card overflow-hidden hover:border-border-hover transition-all duration-300 flex flex-col">
        {/* Project Image Preview */}
        {project.images && project.images[0] && (
          <Link
            href={`/projects/${project.slug}`}
            className="block relative w-full aspect-[16/9] overflow-hidden border-b border-border bg-bg-secondary group/img"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/70 via-transparent to-transparent" />
          </Link>
        )}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <StatusBadge status={project.status} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-text-tertiary mt-1">{project.category}</p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Compact stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {Object.values(project.stack)
                .flat()
                .slice(0, 6)
                .map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs text-text-secondary bg-bg-primary border border-border rounded-md"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center justify-between gap-2 pt-2">
            <Button
              href={`/projects/${project.slug}`}
              variant="ghost"
              size="sm"
              id={`project-detail-${project.slug}`}
            >
              Details
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-accent bg-accent/10 border border-accent/20 rounded-lg hover:bg-accent/20 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-bg-card-hover transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="py-24 md:py-32 bg-bg-secondary" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          description="Real projects with real engineering decisions. Click through for full case studies."
        />

        {/* Featured projects */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
