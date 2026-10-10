"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : ""}
    >
      <span className="inline-block text-sm font-medium tracking-wider uppercase text-accent mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-text-secondary text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
