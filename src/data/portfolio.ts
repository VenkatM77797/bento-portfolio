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
  location: string;
  year: string;
  coursework: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
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
  certifications: Certification[];
  openSource: {
    message: string;
    repos: Repo[];
  };
};

export const portfolio: Portfolio = {
  personal: {
    name: "Venkat Mandarapu",
    shortName: "Venkat",

    role: "Full Stack Developer",

    tagline: "REACT · TYPESCRIPT · NODE.JS",

    location: "Texas, United States",

    bio: "Full Stack Developer focused on building responsive web applications, scalable APIs, and reliable end-to-end user experiences.",

    about:
      "Software developer with 3+ years of experience designing and building modern, scalable full-stack web applications using React, Next.js, TypeScript, JavaScript, Node.js, Python, and SQL. Experienced in creating responsive and reusable user interfaces, developing and integrating REST APIs, implementing authentication, managing database-driven applications, and deploying solutions to the cloud. Strong focus on **clean code, application performance, responsive design, and practical problem-solving**, with a growing interest in AI and intelligent application development.",

    avatar: "/images/logo.png",

    email: "venkat77797@gmail.com",

    yearsOfExperience: 3,

    available: true,

    availabilityLabel: "Open to opportunities",

    resume: "/resume.pdf",
  },

  social: {
    github: "https://github.com/VenkatM77797",
    linkedin: "https://www.linkedin.com/in/venkat-mandarapu/",
    website: "https://example.com",
  },

  skills: [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"] },
    { label: "Backend", items: ["Node.js", "NestJS", "PostgreSQL", "Redis", "tRPC"] },
    { label: "Tools", items: ["Docker", "GitHub Actions", "Playwright", "Figma", "Vitest"] },
  ],

  github: {
    username: "VenkatM77797",
    repos: 37,
    followers: 10,
    contributionsLastYear: 917,
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
      company: "ECHO IT Solutions",
      role: "Software Developer",
      location: "India",
      start: "2026",
      end: "Present",
      description:
        "I build modern full-stack applications with responsive React interfaces, scalable Node.js/TypeScript/Python APIs, and SQL/PostgreSQL databases. I focus on clean user experiences, reliable backend systems, and cloud deployment with AWS.",
      tech: ["TypeScript", "Next.js", "NestJS"],
    },
    {
      company: "ElevanceSkills",
      role: "Full Stack Web Developer",
      location: "Remote",
      start: "2026",
      end: "2026",
      description:
        "Developed full-stack web applications using **React.js, Tailwind CSS, Node.js, Express, MongoDB, and Firebase**, including REST APIs and JWT-based authentication. Participated in end-to-end development, testing, debugging, and deployment through project-based internship programs.",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      company: "Pittsburg State University",
      role: "Teaching Assistant ",
      location: "Pittsburg, United States",
      start: "2023",
      end: "2024",
      description:
        "Tutored students in DSA, OOP, DBMS, OS, Python, Java, and C++, simplifying complex computer science concepts and problem-solving approaches. Provided hands-on guidance with coding projects, assignments, Git, Linux, and exam preparation.",
      tech: ["DSA", "Python"],
    },
    {
      company: "Kaamkashi Multi-Resources Pvt. Ltd",
      role: "Frontend Developer",
      location: "Pittsburg, United States",
      start: "2021",
      end: "2022",
      description:
        "Developed responsive frontend applications using React.js, Next.js, and Redux, translating Figma designs into polished, mobile-first interfaces. Integrated REST APIs, optimized application performance, and collaborated in an agile startup environment.",
      tech: ["ReactJS", "Next.js"],
    },
  ],

  education: [
    {
      school: "Pittsburg State University",
      degree: "Master of Science",
      field: "Information Technology",
      location: "Pittsburg, Kansas, USA",
      year: "2024",
      coursework: [
        "Advanced Database Systems",
        "Software Engineering",
        "Web Development",
        "Cloud Computing",
        "Data Analytics",
        "Information Security",
      ],
    },
    {
      school: "Andhra University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      location: "Visakhapatnam, Andhra Pradesh, India",
      year: "2022",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ],

  certifications: [
    {
      name: "Claude Academy: Introduction to Model Context Protocol",
      issuer: "Anthropic",
      year: "2026",
      url: "https://academy.claude.com/verify/3f6447fca94123d80e55bf159d1aec57",
    },
    {
      name: "Claude Academy: AI Fluency: Framework and foundations",
      issuer: "Anthropic",
      year: "2026",
      url: "https://academy.claude.com/verify/917a75ca43453314f403554d29ec769c",
    },
    {
      name: "Databricks Fundamentals Accreditation",
      issuer: "Databricks",
      year: "2026",
      url: "https://credentials.databricks.com/af17bc8b-d28c-4723-859b-b18f85246d4c#acc.fOip6GAC",
    },
    {
      name: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
      issuer: "Oracle",
      year: "2026",
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=526B07ECE8F15AD00702B0C0C7D5A1335A0737D0530706B78EDCC3480F39A3BF",
    },
    {
      name: "Get Started with Python",
      issuer: "Google",
      year: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/0X9RTVO2VZ33",
    },
    {
      name: "Decisions, Decisions: Dashboards and Reports",
      issuer: "Google",
      year: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/J461FAIAJR0B",
    },
    {
      name: "What is Data Science?",
      issuer: "Google",
      year: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/YQ5PKGC5C2AB",
    },
    {
      name: "Preparing  Data for Analysis with Microsoft Excel",
      issuer: "Microsoft",
      year: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/QY5IMJ0REY5V",
    },
    {
      name: " Learn DevOps: Docker, Kubernetes, Terraform and Azure DevOps",
      issuer: "Udemy",
      year: "2021",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-9926f56d-0703-4ee2-967c-d3aeb02be91e.jpg",
    },
  ],

  openSource: {
    message:
      "I maintain a handful of small libraries and review PRs most weekends. Issues and first-time contributors welcome.",
    repos: [
      {
        name: "skillgraph",
        description:
          "An interactive career and skill roadmap web application.",
        url: "https://github.com/VenkatM77797/skillgraph",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "roamwise",
        description:
          "A premium, editorial-style travel planning application.",
        url: "https://github.com/VenkatM77797/roamwise",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "velora-ecommerce",
        description:
          "A premium editorial-style e-commerce web application built with React, TypeScript, Tailwind CSS, and Redux Toolkit.",
        url: "https://github.com/VenkatM77797/velora-ecommerce",
        language: "TypeScript",
        stars: 0,
      },
    ],
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
