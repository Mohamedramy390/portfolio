"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Github, WhatsApp, LinkedIn } from "@/components/ui/icons";
import Image from "next/image";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content — takes 3 cols */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-accent border border-accent/20 rounded-full bg-accent-muted">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-text-primary">{profile.name}</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl text-text-secondary font-medium">
                {profile.title}
              </p>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-2xl sm:text-3xl font-semibold gradient-text leading-snug"
            >
              {profile.hero.headline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed"
            >
              {profile.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects" variant="primary" size="lg" id="cta-projects">
                {profile.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg" id="cta-contact">
                {profile.hero.ctaSecondary}
              </Button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
                id="hero-github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-[#0a66c2] transition-colors"
                id="hero-linkedin"
              >
                <LinkedIn className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
                id="hero-email"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-emerald-400 transition-colors"
                id="hero-whatsapp"
              >
                <WhatsApp className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={profile.resumePath}
                download="Mohamed_Ramy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors"
                id="hero-resume"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Portrait showcase — takes 2 cols on lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-accent-cyan/20 to-indigo-500/10 rounded-3xl blur-2xl -z-10 opacity-75" />

              {/* Decorative Tech Rings */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite] -z-10 border-dashed" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-accent-cyan/20 rounded-full animate-[spin_25s_linear_infinite_reverse] -z-10 border-dashed" />

              {/* Portrait Container */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-b from-accent/50 via-border to-accent-cyan/30 shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-[22px] overflow-hidden bg-bg-card border border-border/80">
                  <Image
                    src="/profile-1.png"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                    loading="eager"
                  />
                  {/* Bottom gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-transparent to-transparent pointer-events-none" />

                  {/* Inside bottom caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md bg-bg-card/80 border border-border/60">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-text-primary">{profile.name}</p>
                        <p className="text-[11px] text-text-secondary">E-JUST Computer Science</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-accent px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        Backend
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl backdrop-blur-md bg-bg-card/90 border border-accent/30 shadow-lg text-xs font-medium text-text-primary flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Backend Engineering</span>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl backdrop-blur-md bg-bg-card/90 border border-accent-cyan/30 shadow-lg text-xs font-medium text-text-primary flex items-center gap-2"
              >
                <span className="text-accent-cyan">🛡️</span>
                <span>Cybersecurity (CNC)</span>
              </motion.div>

              {/* Tech stack chips beneath photo */}
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {["NestJS", "PostgreSQL", "Redis", "Docker", "Next.js", "RAG / AI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-text-secondary bg-bg-card/90 border border-border/80 rounded-lg backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-text-tertiary">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-tertiary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
