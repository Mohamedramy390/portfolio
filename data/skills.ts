export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API Design",
      "Socket.IO",
      "Authentication & Authorization",
      "JWT",
      "RBAC",
      "Backend Architecture",
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "Redis",
      "Vector Search",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "AI Integration",
    skills: [
      "Gemini APIs",
      "Retrieval-Augmented Generation",
      "ChromaDB",
      "Prompt Engineering",
      "AI Service Integration",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux",
      "Postman",
      "Insomnia",
      "Jira",
    ],
  },
  {
    title: "Cybersecurity & Networks",
    skills: [
      "Auth Security",
      "API Security Fundamentals",
      "Linux Administration",
      "Networking Fundamentals",
      "Web Application Security",
    ],
  },
];
