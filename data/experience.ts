export interface Experience {
  title: string;
  organization: string;
  context?: string;
  period: string;
  responsibilities: string[];
  impact?: string;
  type: "work" | "teaching" | "activity";
}

export const experiences: Experience[] = [
    
  {
    title: "Data Structures & Algorithms Instructor",
    organization: "Freelance Academic Tutoring",
    context: "Alexandria, Egypt",
    period: "Sep 2023 – Jun 2024",
    responsibilities: [
      "Core CS Instruction: Taught Data Structures and Algorithms in C++ to 100+ students, focusing on time/space complexity analysis and efficient memory management.",
      "Technical Mentorship: Developed custom coding challenges focused on algorithmic problem-solving, a cornerstone of well-rounded software engineering.",
    ],
    impact: "Taught 100+ students",
    type: "teaching",
  },
  {
    title: "Programming Instructor",
    organization: "iSchool / Kids at School Academy",
    context: "Programming education in collaboration with MCIT Egypt",
    period: "2024",
    responsibilities: [
      "Taught programming fundamentals, computational thinking, and software concepts to young learners.",
      "Introduced AI concepts and algorithmic problem-solving through structured, project-based lessons.",
    ],
    impact: "Mentored aspiring young engineers",
    type: "teaching",
  },
];
