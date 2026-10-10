export interface Achievement {
  title: string;
  context: string;
  description: string;
  project?: string;
  prize?: string;
}

export const achievements: Achievement[] = [
  {
    title: "1st Place — EJUST AI-Accelerated Appathon (2025)",
    context: "Alexandria, Egypt · 20+ Competing Teams",
    description:
      "Secured 1st place among 20+ teams for the technical architecture and full-stack implementation of MindsetAI, an AI-driven educational platform.",
    project: "MindsetAI",
    prize: "EGP 15,000 Prize",
  },
  {
    title: "JAC-ECC Technical Recognition",
    context: "Academic & Research Recognition",
    description:
      "Received JAC-ECC recognition acknowledging the technical depth, RAG pipeline, and educational impact of MindsetAI.",
    project: "MindsetAI",
  },
  {
    title: "Core CS & Algorithms Mentorship",
    context: "Academic Instruction Impact",
    description:
      "Instructed and mentored 100+ students in C++ Data Structures & Algorithms, focusing on time/space complexity analysis and efficient memory management.",
  },
  {
    title: "ECPC Qualification",
    context: "Competitive Programming",
    description:
      "Participated in the Egyptian Collegiate Programming Contest qualification round, solving advanced algorithmic challenges under tight constraints.",
  },
];
