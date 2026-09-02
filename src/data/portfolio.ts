/**
 * ============================================================================
 *  EDIT THIS FILE — and only this file — to make the portfolio yours.
 *  Every component reads from the `portfolio` object below.
 *  Images live in `public/images/` — replace them keeping the same file names,
 *  or point to any URL / path you like.
 * ============================================================================
 */

export type Social = {
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  field: string;
  year: string;
};

export type Repo = {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
};

export type Portfolio = {
  personal: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    location: string;
    bio: string;
    about: string;
    avatar: string;
    email: string;
    yearsOfExperience: number;
    available: boolean;
    availabilityLabel: string;
    /** Set to "" to hide the resume card entirely. */
    resume: string;
  };
  social: Social;
  skills: SkillGroup[];
  github: {
    username: string;
    repos: number;
    followers: number;
    contributionsLastYear: number;
    /** 0–4 intensity per day, newest last. Purely illustrative, no API needed. */
    activity: number[];
  };
  currentlyBuilding: {
    name: string;
    description: string;
    tech: string[];
    status: string;
    progress: number;
  };
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  openSource: {
    message: string;
    repos: Repo[];
  };
  template: {
    /** Repository of this template — shown in the footer. */
    repo: string;
    name: string;
  };
};

export const portfolio: Portfolio = {
  personal: {
    name: "Ada Marlowe",
    shortName: "Ada",
    role: "Full Stack Developer",
    tagline: "React · TypeScript · Node",
    location: "Lisbon, Portugal",
    bio: "I build thoughtful, scalable web applications and enjoy turning complex problems into simple experiences.",
    about:
      "I'm a full stack developer with a soft spot for design systems and developer experience. Most of my work lives at the seam between a well-modelled backend and an interface that feels obvious to use. Lately I've been building AI-assisted document tooling, shipping design systems used by multiple product teams, and writing about the boring engineering that makes products feel fast. Outside of work you'll find me running along the Tejo, restoring mechanical keyboards, and reviewing far too many pull requests for fun.",
    avatar: "/images/avatar.jpg",
    email: "hello@example.com",
    yearsOfExperience: 7,
    available: true,
    availabilityLabel: "Available for opportunities",
    resume: "/resume.pdf",
  },

  social: {
    github: "https://github.com/github",
    linkedin: "https://www.linkedin.com/in/linkedin",
    website: "https://example.com",
  },

  skills: [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"] },
    { label: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Redis", "tRPC"] },
    { label: "Tools", items: ["Docker", "GitHub Actions", "Playwright", "Figma", "Vitest"] },
  ],

  github: {
    username: "github",
    repos: 48,
    followers: 612,
    contributionsLastYear: 1284,
    activity: [
      1, 0, 2, 3, 1, 2, 4, 2, 0, 1, 3, 4, 2, 1, 0, 2, 3, 3, 4, 1, 0, 1, 2, 4, 3, 2, 1, 0, 2, 3, 4,
      4, 2, 1, 0, 1, 3, 2, 4, 3, 1, 0, 2, 3, 4, 2, 1, 3, 2, 4, 1, 0,
    ],
  },

  currentlyBuilding: {
    name: "Atlas",
    description:
      "An AI-powered document management platform that turns messy company knowledge into answerable questions.",
    tech: ["Next.js", "PostgreSQL", "pgvector"],
    status: "Private beta",
    progress: 68,
  },

  projects: [
    {
      slug: "atlas",
      title: "Atlas — Document Intelligence",
      description:
        "Semantic search and summarisation across thousands of internal documents, with per-team access control and streaming answers.",
      image: "/images/project-atlas.jpg",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/github",
      demo: "https://example.com",
      featured: true,
      year: "2026",
    },
    {
      slug: "pulse",
      title: "Pulse Analytics",
      description:
        "A privacy-first product analytics dashboard with cohort funnels, live event streams and sub-second queries.",
      image: "/images/project-pulse.jpg",
      tech: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/github",
      demo: "https://example.com",
      featured: true,
      year: "2025",
    },
    {
      slug: "forge",
      title: "Forge CLI",
      description:
        "A zero-config scaffolding CLI that generates typed API clients, tests and CI pipelines from an OpenAPI schema.",
      image: "/images/project-forge.jpg",
      tech: ["TypeScript", "Node.js"],
      github: "https://github.com/github",
      year: "2025",
    },
    {
      slug: "tempo",
      title: "Tempo Habits",
      description:
        "An offline-first habit tracker with local-first sync, streak analytics and a calm, minimal interface.",
      image: "/images/project-tempo.jpg",
      tech: ["React", "TypeScript"],
      github: "https://github.com/github",
      demo: "https://example.com",
      year: "2024",
    },
    {
      slug: "signal",
      title: "Signal Digest",
      description:
        "A Python service that clusters release notes from 200+ dependencies into a weekly digest for engineering teams.",
      image: "/images/project-forge.jpg",
      tech: ["Python", "PostgreSQL"],
      github: "https://github.com/github",
      year: "2024",
    },
  ],

  experience: [
    {
      company: "Northwind Labs",
      role: "Senior Full Stack Engineer",
      location: "Lisbon, Portugal",
      start: "2023",
      end: "Present",
      description:
        "Lead the platform team building the design system and API layer powering four customer-facing products.",
      tech: ["TypeScript", "Next.js", "NestJS"],
    },
    {
      company: "Kestrel Digital",
      role: "Full Stack Engineer",
      location: "Remote",
      start: "2021",
      end: "2023",
      description:
        "Shipped a multi-tenant billing platform and cut median API latency by 60% through query and cache work.",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      company: "Fieldstone",
      role: "Frontend Engineer",
      location: "Porto, Portugal",
      start: "2019",
      end: "2021",
      description:
        "Rebuilt the customer portal as a component-driven React app with a full accessibility pass.",
      tech: ["React", "Tailwind CSS"],
    },
  ],

  education: [
    {
      school: "University of Porto",
      degree: "MSc",
      field: "Software Engineering",
      year: "2019",
    },
    {
      school: "University of Porto",
      degree: "BSc",
      field: "Computer Science",
      year: "2017",
    },
  ],

  openSource: {
    message:
      "I maintain a handful of small libraries and review PRs most weekends. Issues and first-time contributors welcome.",
    repos: [
      {
        name: "bento-portfolio",
        description: "The open-source template this site is built on.",
        url: "https://github.com/github",
        language: "TypeScript",
        stars: 1240,
      },
      {
        name: "use-persisted-state",
        description: "A 1kb typed hook for storage-backed React state.",
        url: "https://github.com/github",
        language: "TypeScript",
        stars: 386,
      },
      {
        name: "pgvector-recipes",
        description: "Practical patterns for vector search in Postgres.",
        url: "https://github.com/github",
        language: "Python",
        stars: 214,
      },
    ],
  },

  template: {
    repo: "https://github.com/github",
    name: "Bento Portfolio",
  },
};

/** Tech filters used by the Projects section. "All" is added automatically. */
export const projectFilters = ["React", "TypeScript", "Node.js", "Python"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
