export const profile = {
  name: "Mohamed Ramy",
  firstName: "Mohamed",
  lastName: "Ramy",
  title: "Backend-Focused Software Engineer",
  subtitle: "Full-Stack Developer",
  location: "Alexandria, Egypt",
  email: "m.r.business390@gmail.com",
  phone: "+20-102-142-3745", // Configurable — set to null to hide
  whatsapp: "https://wa.me/201021423745",
  whatsappNumber: "+20 102 142 3745",
  linkedin: "https://www.linkedin.com/in/mohamed-ramy-13929a1b3",
  linkedinUsername: "mohamed-ramy-13929a1b3",
  github: "https://github.com/Mohamedramy390",
  githubUsername: "Mohamedramy390",
  resumePath: "/resume.pdf", // Place resume at /public/resume.pdf
  // Set to your production domain when deployed
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mohamedramy.dev",

  hero: {
    headline: "Building reliable backend systems and full-stack applications.",
    description:
      "I'm Mohamed Ramy, a computer science student at E-JUST focused on backend engineering, API design, database-driven applications, and AI-powered products. I enjoy turning complex requirements into maintainable software.",
    ctaPrimary: "View My Projects",
    ctaSecondary: "Get in Touch",
  },

  about: {
    paragraphs: [
      "I'm a Computer Science student at Egypt-Japan University of Science and Technology (E-JUST), specializing in Computer and Network Cyber Security. My primary focus is backend engineering — designing APIs, modeling databases, implementing authentication systems, and building the server-side logic that powers web applications.",
      "I work across the full stack when projects demand it. My experience spans Node.js, Express.js, NestJS, and Next.js on the backend, React and Next.js on the frontend, and PostgreSQL, MongoDB, and Redis for data storage. I've also built AI-powered features using retrieval-augmented generation and integrated external AI services into production workflows.",
      "My cybersecurity specialization has shaped how I think about software — I pay close attention to authentication flows, authorization models, API security, and secure application architecture. These aren't afterthoughts in my work; they're foundational considerations.",
      "Beyond building software, I've taught programming to over 100 students, from children learning their first lines of code to university peers studying C++ and data structures. Teaching has strengthened my ability to break down complex problems and communicate technical ideas clearly.",
    ],
  },

  approach: [
    {
      title: "Backend-First Thinking",
      description:
        "I start with data models, API contracts, and system boundaries before writing any UI code. A well-designed backend makes everything else easier.",
    },
    {
      title: "Clear API Contracts",
      description:
        "I design APIs that are predictable, well-documented, and easy to consume. Good interfaces reduce integration friction and catch problems early.",
    },
    {
      title: "Security as Foundation",
      description:
        "Authentication, authorization, and input validation aren't features I bolt on at the end. My cybersecurity background means these are part of my initial design.",
    },
    {
      title: "Purposeful AI Integration",
      description:
        "I integrate AI where it solves real problems — document understanding, intelligent search, context-aware responses — not as decoration.",
    },
    {
      title: "Learn by Building",
      description:
        "I learn technologies by building real projects with them, debugging production issues, and reviewing my own architectural decisions.",
    },
    {
      title: "Maintainable by Default",
      description:
        "I write code that future developers (including future me) can understand. Clear naming, consistent patterns, and honest documentation.",
    },
  ],

  beyondCoding: [
    {
      title: "Teaching & Technical Communication",
      description:
        "I've taught programming to children and university students, developing my ability to explain complex ideas through practical, structured lessons.",
    },
    {
      title: "Running & Performance",
      description:
        "I track my running performance and use it as a way to stay disciplined and focused outside of coding.",
    },
    {
      title: "Continuous Learning",
      description:
        "I actively explore new tools, frameworks, and architectural patterns — not to chase trends, but to make better engineering decisions.",
    },
  ],

  contact: {
    headline: "Have a project in mind? Let's talk.",
    description:
      "I'm open to backend engineering roles, full-stack development projects, and interesting technical collaborations. Whether you have a specific project or just want to connect, feel free to reach out.",
  },

  footer: {
    tagline: "Backend-Focused Software Engineer",
  },
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
