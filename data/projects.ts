export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  role: string;
  contributions: string[];
  challenges: string[];
  architecture: string;
  features: string[];
  stack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
    ai?: string[];
  };
  githubUrl?: string; // Leave undefined if not yet public
  demoUrl?: string; // Leave undefined if not verified
  images?: string[]; // Paths relative to /public/images/projects/
  status: "completed" | "in-progress" | "mvp";
  featured: boolean;
  achievement?: string;
}

export const projects: Project[] = [
  {
    slug: "inspection-academy",
    title: "Inspection Academy Platform",
    category: "Backend Engineering / EdTech / LMS",
    shortDescription:
      "A learning and examination platform for professional inspection certification training in the oil, gas, and energy industries.",
    problem:
      "Professional inspection training requires structured learning paths, secure examination workflows, and certification management. The platform needed role-based access control, enrollment state management, and integration with video delivery services — all built on a reliable backend.",
    role: "Backend Developer",
    contributions: [
      "Designed and implemented backend APIs and database models using NestJS, PostgreSQL, and Prisma",
      "Built role-based access control (RBAC) with JWT authentication and protected application flows",
      "Implemented enrollment management with PENDING, ACTIVE, and REVOKED states",
      "Developed training and examination workflows with backend validation",
      "Integrated video delivery services including VdoCipher and Bunny.net",
      "Built frontend-to-backend integration with Next.js",
    ],
    challenges: [
      "Modeling complex enrollment states and transitions while maintaining data consistency",
      "Implementing secure, role-aware API routes that correctly handle different user types",
      "Integrating multiple video delivery platforms with different APIs and security requirements",
      "Designing database schemas that support both learning management and certification tracking",
    ],
    architecture:
      "Full-stack architecture with NestJS handling the API layer, PostgreSQL for persistent storage via Prisma ORM, Redis for session management and caching, and Next.js for the frontend. JWT-based authentication flows protect all routes, with role-based middleware controlling access to admin, instructor, and student functionality.",
    features: [
      "Role-based access control with multiple user types",
      "JWT authentication and protected application flows",
      "Enrollment management with state transitions",
      "Training and examination workflows",
      "Certification-related features",
      "Video delivery integration",
      "Backend APIs with Prisma-based data modeling",
    ],
    stack: {
      frontend: ["Next.js", "TypeScript"],
      backend: ["NestJS", "TypeScript", "JWT", "RBAC"],
      database: ["PostgreSQL", "Prisma", "Redis"],
      infrastructure: ["Cloudinary", "VdoCipher", "Bunny.net"],
    },
    // TODO: Add verified GitHub URL when available
    githubUrl: undefined,
    demoUrl: "https://ia-platform-kappa.vercel.app/",
    images: ["/images/projects/inspection-academy.png"],
    status: "in-progress",
    featured: true,
  },
  {
    slug: "mindset-ai",
    title: "MindsetAI",
    category: "AI-Powered Education / Full-Stack / RAG",
    shortDescription:
      "An AI-powered learning platform that helps students interact with educational materials and extract more value from their study content.",
    problem:
      "Students often struggle to engage deeply with educational materials like PDFs and lecture notes. Traditional study tools don't provide contextual understanding or adaptive responses. MindsetAI addresses this by enabling AI-assisted conversations with learning materials using retrieval-augmented generation.",
    role: "Lead Full-Stack Developer",
    contributions: [
      "Led full-stack development from architecture design to implementation",
      "Built the backend API with Node.js, Express.js, and MongoDB",
      "Implemented JWT authentication with bcrypt for secure user management",
      "Integrated Gemini API for AI-powered educational interactions",
      "Developed retrieval-augmented generation (RAG) pipeline for context-aware conversations",
      "Built vector search functionality with ChromaDB for document retrieval",
      "Implemented Python-based AI service using Flask and Gemini 2.5 Pro",
      "Created role-based functionality for teachers and students",
    ],
    challenges: [
      "Building a RAG pipeline that provides contextually accurate responses from educational documents",
      "Designing the document processing workflow to extract, chunk, and embed educational content",
      "Integrating a Python AI service with the Node.js backend while maintaining clean API boundaries",
      "Implementing teacher analytics that meaningfully identify learning gaps across student interactions",
    ],
    architecture:
      "The application consists of a React frontend, a Node.js/Express.js backend handling authentication and core logic, and a Python/Flask AI service responsible for document processing and RAG. MongoDB stores user data and learning rooms. ChromaDB handles vector embeddings for document retrieval. The Gemini API provides language model capabilities for context-aware educational responses.",
    features: [
      "Educational PDF upload and learning-room workflows",
      "Context-aware AI conversations with learning materials",
      "Retrieval-augmented generation for accurate document-based responses",
      "AI-assisted topic extraction and study guidance",
      "Role-based functionality for teachers and students",
      "Teacher-oriented analytics and learning-gap analysis",
      "Vector search for efficient document retrieval",
    ],
    stack: {
      frontend: ["React"],
      backend: ["Node.js", "Express.js", "JWT", "bcrypt"],
      database: ["MongoDB"],
      ai: [
        "Gemini API",
        "Gemini 2.5 Pro",
        "RAG",
        "ChromaDB",
        "Flask",
        "Python",
      ],
    },
    githubUrl:
      "https://github.com/Mohamedramy390/mindset---Education-Ai-project",
    demoUrl: undefined,
    images: ["/images/projects/mindset-ai.jpg"],
    status: "completed",
    featured: true,
    achievement: "First place at E-JUST Appathon · JAC-ECC recognition",
  },
  {
    slug: "orger",
    title: "orGer",
    category: "E-Commerce / Local Business Technology",
    shortDescription:
      "An MVP concept for restaurant ordering in Borg El Arab, Egypt, designed around a local delivery model connecting customers with participating restaurants.",
    problem:
      "Local restaurants in Borg El Arab lack a unified digital ordering platform. orGer was designed as an MVP to connect customers with participating restaurants while supporting a cash-based delivery workflow suited to the local market.",
    role: "Developer",
    contributions: [
      "Developed the frontend ordering experience",
      "Designed the local delivery workflow concept",
      "Built the customer-restaurant interaction flows",
    ],
    challenges: [
      "Designing for a cash-based delivery model in a market with limited digital payment adoption",
      "Creating an MVP that could validate the concept without over-engineering infrastructure",
    ],
    architecture:
      "Frontend deployed on Vercel, backend on Render, with Supabase providing database and storage services. The architecture was chosen for rapid MVP development and cost-effective hosting.",
    features: [
      "Restaurant listing and menu browsing",
      "Customer ordering workflow",
      "Cash-based delivery model support",
      "Local business integration concept",
    ],
    stack: {
      frontend: ["Next.js"],
      backend: ["Node.js"],
      database: ["Supabase"],
      infrastructure: ["Vercel", "Render"],
    },
    // TODO: Add verified GitHub URL and demo when available
    githubUrl: undefined,
    demoUrl: "https://orger-web.vercel.app/",
    images: ["/images/projects/orger.png"],
    status: "mvp",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
